import { memo } from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import PersonCard from './ui/PersonCard';
import { fadeAnimation } from 'shared/common/styles';
import { teamData } from './model/data';

const OurTeam = () => {
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
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        Our Team
      </Typography>
      <Stack spacing={4} sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}>
        <PersonCard key={teamData.title} {...teamData} animation={fadeAnimation} />
      </Stack>
    </Stack>
  );
};

export default memo(OurTeam);
