import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { IMovie } from 'shared/api/lib/types';
import { fadeAnimation, initMotion } from 'shared/common/styles';
import Movie from 'widgets/MoviesList/ui/Movie';

const MoviePage = () => {
  const { state: movie } = useLocation();

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
        Movie
      </Typography>
      <Movie movie={movie as IMovie} />
    </Stack>
  );
};

export default MoviePage;
