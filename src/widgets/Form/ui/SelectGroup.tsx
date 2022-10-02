import { FC, memo } from 'react';
import { FormControl, NativeSelect, FormHelperText } from '@mui/material';

import { ISelectGroup } from '../lib/types';

const SelectGroup: FC<ISelectGroup> = ({ selectRef, setDisabled }) => (
  <FormControl error={selectRef.valid}>
    <NativeSelect
      inputProps={{ name: 'Country' }}
      variant="standard"
      inputRef={selectRef.ref}
      defaultValue=""
      onChange={() => setDisabled(false)}
    >
      <option value={''}>Choose country</option>
      <option value={'Kazakhstan'}>Kazakhstan</option>
      <option value={'Russia'}>Russia</option>
      <option value={'Belarus'}>Belarus</option>
      <option value={'Ukraine'}>Ukraine</option>
    </NativeSelect>
    <FormHelperText sx={{ ml: 0 }}>
      {selectRef.valid ? 'Please enter your Country' : ''}
    </FormHelperText>
  </FormControl>
);

export default memo(SelectGroup);
