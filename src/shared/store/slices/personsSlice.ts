import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { IPersonData } from 'widgets/Form/lib/types';

export const personsAdapter = createEntityAdapter<IPersonData>();

const personsSlice = createSlice({
  name: 'persons',
  initialState: personsAdapter.getInitialState(),
  reducers: {
    personAdded: personsAdapter.addOne,
  },
});

export const { personAdded } = personsSlice.actions;
export default personsSlice;
