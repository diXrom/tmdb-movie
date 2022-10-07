import { FC, memo } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { IInputGroup } from '../lib/types';

type IDateGroup = IInputGroup;

const DateGroup: FC<IDateGroup> = ({ state: { input, setInput }, label }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      disableFuture
      label="Birthday"
      openTo="year"
      minDate={dayjs('1970-01-01')}
      maxDate={dayjs('2012-01-01')}
      views={['year', 'month', 'day']}
      value={input.value}
      onChange={(newValue) => setInput(() => ({ value: newValue, valid: !newValue?.year }))}
      renderInput={({ inputProps, error, ...params }) => (
        <TextField
          {...params}
          error={input.valid || error}
          inputProps={{ 'data-testid': `input${label.replace(/\s/g, '')}`, ...inputProps }}
          helperText={input.valid || error ? `Please enter your ${label}` : ''}
        />
      )}
    />
  </LocalizationProvider>
);

export default memo(DateGroup);
