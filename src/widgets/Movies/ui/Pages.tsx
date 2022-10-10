import { memo } from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

import { selectPages } from '../model/constants';
import { allMoviesSelector } from 'shared/store/lib/selectors';
import { useAppDispatch, useAppSelector } from 'shared/store/model/hooks';
import { setMoviesPerPage } from 'shared/store/slices/moviesSlice';

const Pages = () => {
  const dispatch = useAppDispatch();
  const { search, moviesPerPage } = useAppSelector(allMoviesSelector);

  return (
    <FormControl sx={{ minWidth: 150 }} size="small">
      <InputLabel>Movies per page</InputLabel>
      <Select
        label="Movies per page"
        disabled={!!search}
        value={moviesPerPage}
        onChange={(e) => dispatch(setMoviesPerPage(e.target.value))}
      >
        {selectPages.map((number) => (
          <MenuItem key={number} value={number}>
            {number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(Pages);
