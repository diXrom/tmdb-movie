import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMoviesQuery, ISearchQuery, IMoviesResponses } from './lib/types';

import { prepareHeaders, transformResponse } from './lib/util';
import { API_URL, API_PATH } from './model/constants';
const { MOVIE, SEARCH } = API_PATH;

export const themoviedbAPI = createApi({
  reducerPath: 'themoviedbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, prepareHeaders }),
  endpoints: (build) => ({
    getMovies: build.query<IMoviesResponses, IMoviesQuery>({
      query: (params) => ({ url: MOVIE, params }),
      ...transformResponse,
    }),
    searchMovies: build.query<IMoviesResponses, ISearchQuery>({
      query: (params) => ({ url: SEARCH, params }),
      ...transformResponse,
    }),
  }),
});

export const { useGetMoviesQuery, useSearchMoviesQuery } = themoviedbAPI;
