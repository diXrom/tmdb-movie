import { memo } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Stack,
  SelectChangeEvent,
} from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

import { selectFilters } from '../model/constants';
import { allMoviesSelector } from 'shared/store/lib/selectors';
import { useAppDispatch, useAppSelector } from 'shared/store/model/hooks';
import { setFilter } from 'shared/store/slices/moviesSlice';

const Filters = () => {
  const dispatch = useAppDispatch();
  const { search, filter } = useAppSelector(allMoviesSelector);
  const handleFilter = (e: SelectChangeEvent<string>) => dispatch(setFilter(e.target.value));

  return (
    <FormControl sx={{ minWidth: 195 }} size="small">
      <InputLabel>Filters</InputLabel>
      <Select label="Filters" disabled={!!search} value={filter} onChange={handleFilter}>
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
