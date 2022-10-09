import { ChangeEvent, memo } from 'react';
import { Pagination, Stack } from '@mui/material';

import Filters from './Filters';
import Pages from './Pages';
import { motion } from 'framer-motion';
import { fadeAnimation, initMotion } from 'shared/common/styles';

type IMoviesControl = {
  page: number;
  totalPage?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const MoviesControl = ({ page, totalPage, setPage }: IMoviesControl) => {
  const handleChange = (e: ChangeEvent<unknown>, value: number) => setPage(value);

  if (!totalPage) return null;

  return (
    <Stack
      direction={'row'}
      spacing={1}
      component={motion.div}
      variants={fadeAnimation}
      custom={1}
      {...initMotion}
    >
      <Pages />
      <Pagination
        color="primary"
        count={totalPage && totalPage > 20 ? 20 : totalPage}
        page={page}
        onChange={handleChange}
        shape="rounded"
        size="large"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
      <Filters />
    </Stack>
  );
};

export default memo(MoviesControl);
