import { memo } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import MovieProgress from 'widgets/MoviesList/ui/MovieProgress';
import { IMovie, IMoviesResponses } from 'shared/api/lib/types';
import { moviesPerPageSelector } from 'shared/store/lib/selectors';
import { useAppSelector } from 'shared/store/model/hooks';
import MovieNotFound from './ui/MovieNotFound';
import MovieItem from './ui/MovieItem';

type IMoviesList = { movies: IMoviesResponses | undefined; loading: boolean };

const MoviesList = (props: IMoviesList) => {
  const { movies, loading } = props;
  const moviesPerPage = useAppSelector(moviesPerPageSelector);

  if (loading || !movies) return <MovieProgress />;
  if (!movies.ids.length) return <MovieNotFound />;

  return (
    <Grid
      data-testid="мoviesList"
      container
      spacing={2}
      sx={{ width: '100%', justifyContent: 'center' }}
    >
      {movies.ids.slice(0, Number(moviesPerPage)).map((id, index) => (
        <MovieItem key={id} movie={movies.entities[id] as IMovie} index={index} />
      ))}
    </Grid>
  );
};

export default memo(MoviesList);
