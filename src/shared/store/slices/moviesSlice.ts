import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesState = { search: string };

const initialState: MoviesState = { search: '' };
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
  },
});

export const { setSearch } = moviesSlice.actions;
export default moviesSlice;
