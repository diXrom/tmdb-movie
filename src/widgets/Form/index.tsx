import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { Button, FormHelperText, Paper, Stack, Typography } from '@mui/material';

import { fadeAnimation, initMotion } from 'shared/common/styles';
import { FormStyle } from './lib/styles';
import { useForm } from './model/hooks';
import { submitForm } from './lib/util';
import { IForm } from './lib/types';
import CheckBoxGroup from './ui/CheckBoxGroup';
import SelectGroup from './ui/SelectGroup';
import InputGroup from './ui/InputGroup';
import SuccessSnack from './ui/SuccessSnack';

const Form: FC<IForm> = ({ setData }) => {
  const { refMap, success, setSuccess, isDisabled, setDisabled } = useForm();

  return (
    <Paper
      elevation={3}
      sx={FormStyle}
      component={motion.div}
      variants={fadeAnimation}
      {...initMotion}
    >
      <Stack component="form" autoComplete="off" spacing={1.5} sx={{ marginY: 2, width: 235 }}>
        <Typography variant="h6" sx={{ alignSelf: 'center' }}>
          Personal data
        </Typography>
        <InputGroup inputRef={refMap[0]} setDisabled={setDisabled} label="First Name" />
        <InputGroup inputRef={refMap[1]} setDisabled={setDisabled} label="Last Name" />
        <InputGroup
          inputRef={refMap[2]}
          setDisabled={setDisabled}
          label="Birthday"
          InputLabelProps={{ shrink: true }}
          type="date"
        />
        <SelectGroup selectRef={refMap[3]} setDisabled={setDisabled} />
        <Button
          variant="contained"
          component="label"
          color={refMap[4].valid ? 'error' : 'primary'}
          onChange={() => setDisabled(false)}
        >
          Upload Photo
          <input ref={refMap[4].ref} hidden accept="image/*" type="file" />
        </Button>
        <FormHelperText sx={{ color: 'red' }}>
          {refMap[4].valid ? 'Please upload Photo' : ''}
        </FormHelperText>
        <CheckBoxGroup switchRef={refMap[5]} checkboxRef={refMap[6]} setDisabled={setDisabled} />
        <Button
          disabled={isDisabled}
          variant="contained"
          onClick={() => submitForm(refMap, setData, setSuccess)}
        >
          Submit
        </Button>
        <SuccessSnack success={success} setSuccess={setSuccess} />
      </Stack>
    </Paper>
  );
};

export default memo(Form);
