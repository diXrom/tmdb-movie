import { createContext } from 'react';
import { IPersonData } from 'widgets/Form/lib/types';

type IContext = {
  filter: string;
  page: string;
  search: string;
  persons: IPersonData[];
  setFilter: (payload: string) => void;
  setPage: (payload: string) => void;
  setSearch: (payload: string) => void;
  setPerson: (payload: IPersonData) => void;
};

export const Context = createContext<IContext | null>(null);
