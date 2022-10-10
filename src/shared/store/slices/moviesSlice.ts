import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesState = { search: string; filter: string; page: number; moviesPerPage: string };

const initialState: MoviesState = {
  search: '',
  filter: 'vote_count.desc',
  page: 1,
  moviesPerPage: '20',
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setFilter(state, { payload }: PayloadAction<string>) {
      state.filter = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    setMoviesPerPage(state, { payload }: PayloadAction<string>) {
      state.moviesPerPage = payload;
    },
  },
});

export const { setSearch, setFilter, setPage, setMoviesPerPage } = moviesSlice.actions;
export default moviesSlice;
