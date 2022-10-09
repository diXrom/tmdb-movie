import { memo, useContext } from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

import { selectPages } from '../model/constants';
import { Context } from 'shared/storeContext';

const Pages = () => {
  const { page, setPage, search: query } = useContext(Context)!;

  return (
    <FormControl sx={{ minWidth: 150 }} size="small">
      <InputLabel>Movies per page</InputLabel>
      <Select
        label="Movies per page"
        disabled={!!query}
        value={page}
        onChange={({ target }) => setPage(target.value)}
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
