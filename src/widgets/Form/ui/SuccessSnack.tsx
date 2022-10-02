import { FC, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

import { ISuccessSnack, ITransitionUp } from '../lib/types';

const TransitionUp: FC<ITransitionUp> = (props) => <Slide {...props} direction="up" />;
const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessSnack: FC<ISuccessSnack> = ({ success, setSuccess }) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSuccess(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={success}
        autoHideDuration={1500}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Your data has been saved!
        </Alert>
      </Snackbar>
    </Stack>
  );
};
export default SuccessSnack;
