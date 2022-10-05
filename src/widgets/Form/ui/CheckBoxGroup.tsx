import { FC, memo } from 'react';
import { FormGroup, FormControlLabel, Switch, FormHelperText } from '@mui/material';

import { ICheckBoxGroup } from '../lib/types';

const CheckBoxGroup: FC<ICheckBoxGroup> = ({ switchRef, checkboxRef, setDisabled }) => (
  <FormGroup>
    <FormControlLabel
      data-testid="inputSwitch"
      label="I read the rules"
      control={<Switch inputRef={switchRef.ref} onChange={() => setDisabled(false)} />}
    />
    <FormControlLabel
      sx={{ pl: 1 }}
      control={
        <input
          data-testid="inputCheckbox"
          ref={checkboxRef.ref}
          type="checkbox"
          onChange={() => setDisabled(false)}
        />
      }
      label="I agree with rules"
    />
    <FormHelperText sx={{ color: 'red' }}>
      {switchRef.valid || checkboxRef.valid ? 'Please read and agree with rules' : ''}
    </FormHelperText>
  </FormGroup>
);

export default memo(CheckBoxGroup);
