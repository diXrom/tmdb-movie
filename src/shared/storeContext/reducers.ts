import { IPersonData } from 'widgets/Form/lib/types';
import { ACTION_TYPES } from './actions';

export const initialState = {
  filter: 'vote_count.desc',
  page: '20',
  search: '',
  persons: [] as IPersonData[],
};

type IState = typeof initialState;
type IAction = { type: keyof typeof ACTION_TYPES; payload: string | IPersonData };

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FILTER:
      return {
        ...state,
        filter: action.payload as string,
      };
    case ACTION_TYPES.SET_PAGE:
      return {
        ...state,
        page: action.payload as string,
      };
    case ACTION_TYPES.SET_SEARCH:
      return {
        ...state,
        search: action.payload as string,
      };
    case ACTION_TYPES.SET_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload as IPersonData],
      };
    default:
      return state;
  }
};
