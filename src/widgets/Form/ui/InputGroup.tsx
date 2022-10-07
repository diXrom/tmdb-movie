import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { IInputGroup } from '../lib/types';

const InputGroup: FC<IInputGroup> = ({ state: { input, setInput }, label, ...props }) => (
  <TextField
    error={input.valid}
    label={label}
    value={input.value}
    inputProps={{ 'data-testid': `input${label.replace(/\s/g, '')}` }}
    onChange={({ target }) => setInput(() => ({ value: target.value, valid: !target.value }))}
    helperText={input.valid ? `Please enter your ${label}` : ''}
    {...props}
  />
);

export default memo(InputGroup);
