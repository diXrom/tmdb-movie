import { memo } from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import MoviesList from 'widgets/MoviesList';
import { fadeAnimation, initMotion } from 'shared/common/styles';
import { useGetMoviesQuery, useSearchMoviesQuery } from 'shared/api';
import { allMoviesSelector } from 'shared/store/lib/selectors';
import { useAppSelector } from 'shared/store/model/hooks';
import MoviesControl from './ui/MoviesControl';

const Movies = () => {
  const { page, search: query, filter: sort_by } = useAppSelector(allMoviesSelector);
  const { data: movies, isFetching: isLoading } = useGetMoviesQuery({ page, sort_by });
  const { data: search, isFetching } = useSearchMoviesQuery({ query, page }, { skip: !query });

  return (
    <Stack
      sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold' }}
        component={motion.h4}
        variants={fadeAnimation}
        {...initMotion}
      >
        Movies
      </Typography>
      <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <MoviesControl page={page} totalPage={query ? search?.total_pages : movies?.total_pages} />
        <MoviesList movies={query ? search : movies} loading={query ? isFetching : isLoading} />
      </Stack>
    </Stack>
  );
};

export default memo(Movies);
