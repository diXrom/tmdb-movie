import { FC, memo } from 'react';
import { Box, Drawer, useMediaQuery } from '@mui/material';

import { IMiniDrawer } from '../lib/types';
import { Drawer as ResponsiveDrawer, DrawerStyle } from '../lib/styles';
import DrawerContent from './DrawerContent';

const MiniDrawer: FC<IMiniDrawer> = (props) => {
  const { open, handleDrawerClose } = props;
  const matches = useMediaQuery('(max-width:1024px)');

  return (
    <Box component="nav">
      {matches ? (
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={DrawerStyle}
        >
          <DrawerContent {...props} />
        </Drawer>
      ) : (
        <ResponsiveDrawer variant="permanent" open={open}>
          <DrawerContent {...props} />
        </ResponsiveDrawer>
      )}
    </Box>
  );
};

export default memo(MiniDrawer);
