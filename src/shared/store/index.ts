import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { themoviedbAPI } from 'shared/api';
import moviesSlice from './slices/moviesSlice';
import personsSlice from './slices/personsSlice';

const rootReducer = combineReducers({
  [themoviedbAPI.reducerPath]: themoviedbAPI.reducer,
  moviesSlice: moviesSlice.reducer,
  personsSlice: personsSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(themoviedbAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
