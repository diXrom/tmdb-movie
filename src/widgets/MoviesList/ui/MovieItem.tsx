import { memo } from 'react';
import { Image } from 'mui-image';
import { motion } from 'framer-motion';
import { Unstable_Grid2 as Grid, Card } from '@mui/material';

import { IMovie } from 'shared/api/lib/types';
import { slideAnimation } from 'shared/common/styles';
import { getPath } from '../lib/util';
import { Link } from 'react-router-dom';

type IMovieItem = { movie: IMovie; index: number };

const MovieItem = ({ movie, index }: IMovieItem) => {
  return (
    <Grid
      xs={12}
      md={6}
      lg={4}
      xl={3}
      display="flex"
      justifyContent="center"
      data-testid="мovieItem"
    >
      <Card
        component={motion.div}
        variants={slideAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={index * 0.7}
      >
        <Link to={`movie/${movie.id}`} state={movie}>
          <Image data-testid="мoviePoster" src={getPath(movie)} alt="img" duration={200} />
        </Link>
      </Card>
    </Grid>
  );
};

export default memo(MovieItem);
