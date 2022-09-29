import { useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useAppDispatch } from 'shared/store/model/hooks';
import { setSearch } from 'shared/store/slices/moviesSlice';
import { Search, SearchIconWrapper, StyledInputBase } from '../lib/styles';
import { STORAGE_KEY } from 'shared/common/constants';

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
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search', ref }} />
      </Search>
      <Button
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
        Popular
      </Button>
    </Stack>
  );
};

export default SearchPanel;
