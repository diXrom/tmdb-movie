import { memo } from 'react';
import { motion } from 'framer-motion';
import { Button, Paper, Stack, Typography } from '@mui/material';

import { fadeAnimation, initMotion } from 'shared/common/styles';
import { useAppDispatch } from 'shared/store/model/hooks';
import { personAdded } from 'shared/store/slices/personsSlice';
import { getValue, submitForm } from './lib/util';
import { FormStyle } from './lib/styles';
import { IPersonData } from './lib/types';
import { useForm } from './model/hooks';
import SelectGroup from './ui/SelectGroup';
import CheckBoxGroup from './ui/CheckBoxGroup';
import InputGroup from './ui/InputGroup';
import SuccessSnack from './ui/SuccessSnack';
import UploadGroup from './ui/UploadGroup';
import DateGroup from './ui/DateGrourp';

const Form = () => {
  const { inputMap, success, setSuccess } = useForm();
  const dispatch = useAppDispatch();
  const setData = (payload: IPersonData) => dispatch(personAdded(payload));

  return (
    <Paper
      elevation={3}
      sx={FormStyle}
      component={motion.div}
      variants={fadeAnimation}
      {...initMotion}
    >
      <Stack
        data-testid="form"
        component="form"
        autoComplete="off"
        spacing={1}
        sx={{ marginY: 2, width: 235 }}
      >
        <Typography variant="h6" sx={{ alignSelf: 'center' }}>
          Personal data
        </Typography>
        <InputGroup state={inputMap[0]} label="First Name" />
        <InputGroup state={inputMap[1]} label="Last Name" />
        <DateGroup state={inputMap[2]} label="Birthday" />
        <SelectGroup state={inputMap[3]} label="Country" />
        <CheckBoxGroup switchState={inputMap[5]} checkboxState={inputMap[6]} />
        <UploadGroup state={inputMap[4]} />
        <Button
          sx={{ height: 62 }}
          data-testid="formSubmit"
          disabled={!inputMap.some((item) => getValue(item))}
          variant="contained"
          onClick={() => submitForm(inputMap, setData, setSuccess)}
        >
          Submit
        </Button>
        <SuccessSnack success={success} setSuccess={setSuccess} />
      </Stack>
    </Paper>
  );
};

export default memo(Form);
