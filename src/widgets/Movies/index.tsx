import { memo, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import MoviesList from 'widgets/MoviesList';
import { fadeAnimation, initMotion } from 'shared/common/styles';
import { Context } from 'shared/storeContext';
import { useGetMoviesQuery, useSearchMoviesQuery } from 'shared/api';
import MoviesControl from './ui/MoviesControl';

const Movies = () => {
  const { filter: sort_by, search: query } = useContext(Context)!;
  const [page, setPage] = useState(1);
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
        <MoviesControl
          page={page}
          setPage={setPage}
          totalPage={query ? search?.total_pages : movies?.total_pages}
        />
        <MoviesList movies={query ? search : movies} loading={query ? isFetching : isLoading} />
      </Stack>
    </Stack>
  );
};

export default memo(Movies);
