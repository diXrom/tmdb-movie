import { Stack, Typography } from '@mui/material';
import { Fragment, memo } from 'react';
import { IMovie } from 'shared/api/lib/types';

type IMovieContent = { movie: IMovie };

const MovieContent = ({ movie }: IMovieContent) => {
  return (
    <Fragment>
      <Stack sx={{ mt: 1, fontSize: 20 }}>
        <Typography color="text.secondary" sx={{ fontSize: 18 }}>
          {movie.overview}
        </Typography>
      </Stack>
    </Fragment>
  );
};

export default memo(MovieContent);
