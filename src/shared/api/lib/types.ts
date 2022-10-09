import { EntityState } from '@reduxjs/toolkit/dist/entities/models';

type IMoviesResponses = EntityState<IMovie> & Pick<IMovies, 'total_pages'>;

interface IMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface IMovies {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

interface IMoviesQuery {
  page: number;
  sort_by: string;
}
interface ISearchQuery {
  page: number;
  query: string;
}

export type { IMovie, IMovies, IMoviesQuery, ISearchQuery, IMoviesResponses };
