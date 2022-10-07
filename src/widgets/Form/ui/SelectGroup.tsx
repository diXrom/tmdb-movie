import { FC, memo } from 'react';
import { FormControl, Select, MenuItem, FormHelperText, InputLabel } from '@mui/material';

import { IInputGroup } from '../lib/types';

type ISelectGroup = IInputGroup;

const SelectGroup: FC<ISelectGroup> = ({ state: { input, setInput }, label }) => (
  <FormControl error={input.valid}>
    <InputLabel>{label}</InputLabel>
    <Select
      inputProps={{ 'data-testid': `input${label.replace(/\s/g, '')}` }}
      label={label}
      value={input.value}
      onChange={({ target }) => setInput(() => ({ value: target.value, valid: !target.value }))}
    >
      <MenuItem value={'Kazakhstan'}>Kazakhstan</MenuItem>
      <MenuItem value={'Russia'}>Russia</MenuItem>
      <MenuItem value={'Belarus'}>Belarus</MenuItem>
      <MenuItem value={'Ukraine'}>Ukraine</MenuItem>
    </Select>
    <FormHelperText>{input.valid ? 'Please enter your Country' : ''}</FormHelperText>
  </FormControl>
);

export default memo(SelectGroup);
