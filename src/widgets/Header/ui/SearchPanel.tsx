import { useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Search, SearchIconWrapper, StyledInputBase } from '../lib/styles';
import { STORAGE_KEY } from 'shared/common/constants';
import { setSearch } from 'shared/store/slices/moviesSlice';
import { useAppDispatch } from 'shared/store/model/hooks';

const SearchPanel = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const refCurrent = ref.current;
    const searchStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || '';
    if (refCurrent) refCurrent.value = searchStorage;
    return () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(refCurrent?.value || ''));
    };
  }, []);

  return (
    <Stack direction={'row'} spacing={1}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search', ref, 'data-testid': 'inputSearch' }}
        />
      </Search>
      <Button
        data-testid="btnSearch"
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(setSearch(ref.current?.value || ''))}
      >
        Search
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          dispatch(setSearch(''));
          if (ref.current) ref.current.value = '';
        }}
      >
        Reset
      </Button>
    </Stack>
  );
};

export default SearchPanel;
