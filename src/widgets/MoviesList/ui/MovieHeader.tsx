import { memo } from 'react';
import { Stack, Typography, IconButton } from '@mui/material';

import { IMovie } from 'shared/api/lib/types';
import { Close } from '@mui/icons-material';

type IMovieHeader = {
  movie: IMovie;
  handleClose: () => void;
};

const MovieHeader = ({ movie, handleClose }: IMovieHeader) => (
  <Stack spacing={2}>
    <IconButton color="primary" sx={{ ml: 'auto', p: 0 }} onClick={handleClose}>
      <Close />
    </IconButton>
    <Stack sx={{ borderLeft: `4px solid orange`, pl: 2 }}>
      <Stack direction={'row'} spacing={1} sx={{ alignItems: 'flex-start' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
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
  </Stack>
);

export default memo(MovieHeader);
