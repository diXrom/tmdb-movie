import { IPersonData } from 'widgets/Form/lib/types';

export const ACTION_TYPES = {
  SET_FILTER: 'SET_FILTER' as const,
  SET_PAGE: 'SET_PAGE' as const,
  SET_SEARCH: 'SET_SEARCH' as const,
  SET_PERSON: 'SET_PERSON' as const,
};

export const setFilter = (payload: string) => ({
  type: ACTION_TYPES.SET_FILTER,
  payload,
});

export const setPage = (payload: string) => ({
  type: ACTION_TYPES.SET_PAGE,
  payload,
});

export const setSearch = (payload: string) => ({
  type: ACTION_TYPES.SET_SEARCH,
  payload,
});

export const setPerson = (payload: IPersonData) => ({
  type: ACTION_TYPES.SET_PERSON,
  payload,
});
