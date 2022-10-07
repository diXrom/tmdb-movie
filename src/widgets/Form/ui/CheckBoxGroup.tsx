import { FC, memo } from 'react';
import { FormGroup, FormControlLabel, Switch, Checkbox, FormHelperText } from '@mui/material';

import { ICheckBoxGroup } from '../lib/types';

const CheckBoxGroup: FC<ICheckBoxGroup> = ({ switchState, checkboxState }) => (
  <FormGroup>
    <FormControlLabel
      data-testid="inputSwitch"
      label="I read the rules"
      control={
        <Switch
          checked={switchState.input.value as boolean}
          onChange={({ target }) =>
            switchState.setInput(() => ({ value: target.checked, valid: !target.checked }))
          }
        />
      }
    />
    <FormControlLabel
      data-testid="inputCheckbox"
      label="I agree with rules"
      control={
        <Checkbox
          checked={checkboxState.input.value as boolean}
          onChange={({ target }) =>
            checkboxState.setInput(() => ({ value: target.checked, valid: !target.checked }))
          }
        />
      }
    />
    <FormHelperText sx={{ color: 'red', pl: '14px' }}>
      {checkboxState.input.valid || checkboxState.input.valid ? 'Please read/agree with rules' : ''}
    </FormHelperText>
  </FormGroup>
);

export default memo(CheckBoxGroup);
