import { ChangeEvent, memo } from 'react';
import { Box, Pagination } from '@mui/material';
import { motion } from 'framer-motion';

import { fadeAnimation } from 'shared/common/styles';

type IFilmsPagination = {
  page: number;
  totalPage?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const FilmsPagination = ({ page, totalPage, setPage }: IFilmsPagination) => {
  const handleChange = (e: ChangeEvent<unknown>, value: number) => setPage(value);

  if (!totalPage) return null;

  return (
    <Box
      component={motion.div}
      variants={fadeAnimation}
      custom={1}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Pagination
        color="primary"
        count={totalPage && totalPage > 20 ? 20 : totalPage}
        page={page}
        onChange={handleChange}
        shape="rounded"
        size="large"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
};

export default memo(FilmsPagination);
