import { FC, memo } from 'react';
import { TextField } from '@mui/material';
import { IInputGroup } from '../lib/types';

const InputGroup: FC<IInputGroup> = ({ inputRef, setDisabled, label, ...props }) => (
  <TextField
    error={inputRef.valid}
    label={label}
    variant="standard"
    inputRef={inputRef.ref}
    inputProps={{ 'data-testid': `input${label.replace(/\s/g, '')}` }}
    onChange={() => setDisabled(false)}
    helperText={inputRef.valid ? `Please enter your ${label}` : ''}
    {...props}
  />
);

export default memo(InputGroup);
