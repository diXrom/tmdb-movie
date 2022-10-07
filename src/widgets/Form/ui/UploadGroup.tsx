import { Button, FormHelperText } from '@mui/material';
import { Fragment, FC } from 'react';

import { IInputGroup } from '../lib/types';

type UploadGroup = Pick<IInputGroup, 'state'>;

const UploadGroup: FC<UploadGroup> = ({ state: { input, setInput } }) => (
  <Fragment>
    <Button
      variant="contained"
      component="label"
      color={input.valid ? 'error' : 'primary'}
      sx={{ height: 62 }}
    >
      Upload Photo
      <input
        data-testid="inputFile"
        hidden
        accept="image/*"
        type="file"
        onChange={({ target }) =>
          setInput(() => ({ value: target.files?.[0], valid: !target.value }))
        }
      />
    </Button>
    <FormHelperText sx={{ color: 'red', pl: '14px' }}>
      {input.valid ? 'Please upload Photo' : ''}
    </FormHelperText>
  </Fragment>
);

export default UploadGroup;
