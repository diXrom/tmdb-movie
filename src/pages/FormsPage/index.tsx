import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import Form from 'widgets/Form';
import PersonList from 'widgets/PersonList';
import { fadeAnimation, initMotion } from 'shared/common/styles';

const FormsPage = () => (
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
    <Form />
    <PersonList />
  </Stack>
);

export default FormsPage;
