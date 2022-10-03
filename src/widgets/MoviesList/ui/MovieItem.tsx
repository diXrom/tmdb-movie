import { memo, useState } from 'react';
import { Image } from 'mui-image';
import { motion } from 'framer-motion';
import { Unstable_Grid2 as Grid, Card, CardActionArea, CardContent } from '@mui/material';

import Modal from 'widgets/Modal';
import { IMovie } from 'shared/api/lib/types';
import { API_IMG } from 'shared/api/model/constants';
import { slideAnimation } from 'shared/common/styles';
import { cardMovieStyle } from '../lib/styles';
import MovieContent from './MovieContent';
import MovieHeader from './MovieHeader';
import { getPath } from '../lib/util';

type IMovieItem = { movie: IMovie; index: number };

const MovieItem = ({ movie, index }: IMovieItem) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Grid xs={12} md={6} lg={4} xl={3} display="flex" justifyContent="center">
      <Card
        component={motion.div}
        variants={slideAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={index * 0.7}
      >
        <CardActionArea onClick={() => setOpen(true)} sx={{ height: '100%' }}>
          <Image src={getPath(movie)} alt="img" duration={200} />
        </CardActionArea>
        <Modal open={open} handleClose={handleClose}>
          <Card sx={cardMovieStyle}>
            <Image src={`${API_IMG}${movie.poster_path}`} alt="img" duration={100} />
            <CardContent sx={{ width: '100%' }}>
              <MovieHeader movie={movie} />
              <MovieContent movie={movie} />
            </CardContent>
          </Card>
        </Modal>
      </Card>
    </Grid>
  );
};

export default memo(MovieItem);
