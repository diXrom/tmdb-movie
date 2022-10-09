import { Button, Stack, Typography } from '@mui/material';
import { Fragment, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovie } from 'shared/api/lib/types';
import { movieContentStyle } from '../lib/styles';

type IMovieContent = { movie: IMovie };

const MovieContent = ({ movie }: IMovieContent) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Fragment>
      <Stack sx={movieContentStyle}>
        <Typography color="text.secondary" sx={{ fontSize: 18 }}>
          {movie.overview}
        </Typography>
        <Button sx={{ ml: 'auto' }} onClick={goBack}>
          Back
        </Button>
      </Stack>
    </Fragment>
  );
};

export default memo(MovieContent);
