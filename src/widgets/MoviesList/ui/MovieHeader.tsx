import { memo } from 'react';
import { Stack, Typography } from '@mui/material';

import { IMovie } from 'shared/api/lib/types';

type IMovieHeader = {
  movie: IMovie;
};

const MovieHeader = ({ movie }: IMovieHeader) => (
  <Stack sx={{ borderLeft: `4px solid orange`, pl: 2 }}>
    <Stack direction={'row'} spacing={1} sx={{ alignItems: 'flex-start' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
        {movie.title}
      </Typography>
      <Typography sx={{ backgroundColor: 'orange', p: 1, borderRadius: 1 }}>
        {movie.vote_average % 1 ? movie.vote_average : `${movie.vote_average}.0`}
      </Typography>
    </Stack>
    <Typography variant="body1" color="text.secondary">
      {movie.release_date}
    </Typography>
  </Stack>
);

export default memo(MovieHeader);
