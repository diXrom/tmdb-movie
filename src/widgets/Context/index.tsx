import { FC, useReducer } from 'react';
import { Context } from 'shared/storeContext';
import { setFilter, setPage, setPerson, setSearch } from 'shared/storeContext/actions';
import { initialState, reducer } from 'shared/storeContext/reducers';
import { IPersonData } from 'widgets/Form/lib/types';

type IStoreContext = { children: JSX.Element };

const StoreContext: FC<IStoreContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    filter: state.filter,
    page: state.page,
    search: state.search,
    persons: state.persons,
    setFilter: (payload: string) => dispatch(setFilter(payload)),
    setSearch: (payload: string) => dispatch(setSearch(payload)),
    setPage: (payload: string) => dispatch(setPage(payload)),
    setPerson: (payload: IPersonData) => dispatch(setPerson(payload)),
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default StoreContext;
