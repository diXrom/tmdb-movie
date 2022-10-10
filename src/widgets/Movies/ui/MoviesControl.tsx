import { ChangeEvent, memo } from 'react';
import { Pagination, Stack } from '@mui/material';

import Filters from './Filters';
import Pages from './Pages';
import { motion } from 'framer-motion';
import { fadeAnimation, initMotion } from 'shared/common/styles';
import { useAppDispatch } from 'shared/store/model/hooks';
import { setPage } from 'shared/store/slices/moviesSlice';

type IMoviesControl = { page: number; totalPage?: number };

const MoviesControl = ({ page, totalPage }: IMoviesControl) => {
  const dispatch = useAppDispatch();
  const handlePage = (e: ChangeEvent<unknown>, value: number) => dispatch(setPage(value));

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
        onChange={handlePage}
        shape="rounded"
        size="large"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
      <Filters />
    </Stack>
  );
};

export default memo(MoviesControl);
