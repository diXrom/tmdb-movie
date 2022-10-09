import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import Form from 'widgets/Form';
import PersonList from 'widgets/PersonList';
import { fadeAnimation, initMotion } from 'shared/common/styles';
import { Context } from 'shared/storeContext';

const FormsPage = () => {
  const { persons, setPerson } = useContext(Context)!;

  return (
    <Stack
      sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold' }}
        component={motion.h4}
        variants={fadeAnimation}
        {...initMotion}
      >
        Forms
      </Typography>
      <Form setData={setPerson} />
      <PersonList persons={persons} />
    </Stack>
  );
};

export default FormsPage;
