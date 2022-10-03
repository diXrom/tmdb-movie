import { memo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import MovieProgress from 'widgets/MoviesList/ui/MovieProgress';
import { IMovie, IMoviesResponses } from 'shared/api/lib/types';
import MovieItem from './ui/MovieItem';
import MovieNotFound from './ui/MovieNotFound';

type IMoviesList = { movies: IMoviesResponses | undefined; loading: boolean };

const MoviesList = (props: IMoviesList) => {
  const { movies, loading } = props;

  if (loading || !movies) return <MovieProgress />;

  if (!movies.ids.length) return <MovieNotFound />;

  return (
    <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center' }}>
      {movies.ids.map((id, index) => {
        return <MovieItem key={id} movie={movies.entities[id] as IMovie} index={index} />;
      })}
    </Grid>
  );
};

export default memo(MoviesList);
