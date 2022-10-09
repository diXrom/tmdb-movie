import { FC, memo } from 'react';
import { Card, CardContent } from '@mui/material';
import { IMovie } from 'shared/api/lib/types';
import { Image } from 'mui-image';

import { cardMovieStyle } from '../lib/styles';
import { getPath } from '../lib/util';
import MovieContent from './MovieContent';
import MovieHeader from './MovieHeader';

type IMovieProps = { movie: IMovie };

const Movie: FC<IMovieProps> = ({ movie }) => (
  <Card data-testid="modalCard" sx={cardMovieStyle}>
    <Image src={getPath(movie)} alt="img" duration={100} />
    <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <MovieHeader movie={movie} />
      <MovieContent movie={movie} />
    </CardContent>
  </Card>
);

export default memo(Movie);
