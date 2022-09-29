import { Stack, Typography } from '@mui/material';
import { Fragment, memo } from 'react';
import { IMovie } from 'shared/api/lib/types';

type IMovieContent = { movie: IMovie };

const MovieContent = ({ movie }: IMovieContent) => {
  return (
    <Fragment>
      <Stack sx={{ mt: 1, fontSize: 16 }}>
        <Typography color="text.secondary" sx={{ fontSize: 16 }}>
          {movie.overview.length > 400 ? movie.overview.slice(0, 400) + '...' : movie.overview}
        </Typography>
      </Stack>
    </Fragment>
  );
};

export default memo(MovieContent);
