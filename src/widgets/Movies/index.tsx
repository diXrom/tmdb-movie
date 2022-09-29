import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import MoviesList from 'widgets/MoviesList';
import { fadeAnimation } from 'shared/common/styles';
import { useAppSelector } from 'shared/store/model/hooks';
import { useGetMoviesQuery, useSearchMoviesQuery } from 'shared/api';
import FilmsPagination from './ui/FilmsPagination';

const Movies = () => {
  const [page, setPage] = useState(1);
  const query = useAppSelector((state) => state.moviesSlice.search);
  const { data: movies, isFetching: isLoading } = useGetMoviesQuery({ page });
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
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        Movies
      </Typography>
      <Stack spacing={2} sx={{ marginY: 2, justifyContent: 'center', alignItems: 'center' }}>
        <FilmsPagination
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
