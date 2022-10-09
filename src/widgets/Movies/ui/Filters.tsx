import { memo, useContext } from 'react';
import { FormControl, Select, MenuItem, InputLabel, Typography, Stack } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

import { selectFilters } from '../model/constants';
import { Context } from 'shared/storeContext';

const Filters = () => {
  const { filter, setFilter, search: query } = useContext(Context)!;

  return (
    <FormControl sx={{ minWidth: 195 }} size="small">
      <InputLabel>Filters</InputLabel>
      <Select
        label="Filters"
        disabled={!!query}
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      >
        {selectFilters.map(([value, name], idx) => (
          <MenuItem key={value} value={value}>
            <Stack direction="row" alignItems="center">
              <Typography>{name}</Typography>
              {idx % 2 ? <ArrowDropUp /> : <ArrowDropDown />}
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(Filters);
