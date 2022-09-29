import { memo } from 'react';
import { Image } from 'mui-image';
import { motion } from 'framer-motion';
import { Unstable_Grid2 as Grid, Card, CardContent } from '@mui/material';

import { IMovie } from 'shared/api/lib/types';
import { API_IMG } from 'shared/api/model/constants';
import { slideAnimation } from 'shared/common/styles';
import { cardMovieStyle } from '../lib/styles';
import MovieContent from './MovieContent';
import MovieHeader from './MovieHeader';

type IMovieItem = {
  movie: IMovie;
  index: number;
};

const MovieItem = ({ movie, index }: IMovieItem) => {
  return (
    <Grid md={12} xl={6} display="flex" justifyContent="center">
      <Card
        sx={cardMovieStyle}
        component={motion.div}
        variants={slideAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={index * 0.7}
      >
        <Image src={`${API_IMG}${movie.poster_path}`} alt="img" duration={300} />
        <CardContent sx={{ width: '100%' }}>
          <MovieHeader movie={movie} />
          <MovieContent movie={movie} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(MovieItem);
