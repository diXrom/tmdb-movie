import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { themoviedbAPI } from 'shared/api';
import moviesSlice from './slices/moviesSlice';

const rootReducer = combineReducers({
  [themoviedbAPI.reducerPath]: themoviedbAPI.reducer,
  moviesSlice: moviesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(themoviedbAPI.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
