import { RootState } from '..';
import { personsAdapter } from '../slices/personsSlice';

const allMoviesSelector = (state: RootState) => state.moviesSlice;
const searchSelector = (state: RootState) => allMoviesSelector(state).search;
const filterSelector = (state: RootState) => allMoviesSelector(state).filter;
const pageSelector = (state: RootState) => allMoviesSelector(state).page;
const moviesPerPageSelector = (state: RootState) => allMoviesSelector(state).moviesPerPage;

const personsSlice = personsAdapter.getSelectors<RootState>((state) => state.personsSlice);
const personsSelector = personsSlice.selectAll;

export {
  allMoviesSelector,
  searchSelector,
  filterSelector,
  pageSelector,
  moviesPerPageSelector,
  personsSelector,
};
