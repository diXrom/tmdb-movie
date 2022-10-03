import { createEntityAdapter } from '@reduxjs/toolkit';
import { TOKEN } from '../model/constants';
import { IMovie, IMovies } from './types';

const prepareHeaders = (headers: Headers) => {
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${TOKEN}`);
  return headers;
};

const moviesAdapter = createEntityAdapter<IMovie>();
const initialState = moviesAdapter.getInitialState();

const transformResponse = {
  transformResponse: ({ results, total_pages }: IMovies) => ({
    ...moviesAdapter.setAll(initialState, results),
    total_pages,
  }),
};

export { prepareHeaders, transformResponse, initialState };
