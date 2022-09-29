import { Fragment, memo } from 'react';
import { List, Typography, Divider, IconButton } from '@mui/material';
import { ChevronLeft, Widgets, Groups } from '@mui/icons-material';

import { ROUTE_PATH } from 'shared/common/constants';
import { DrawerHeader } from '../lib/styles';
import ListItem from './ListItemMenu';

type IDrawerContent = {
  open: boolean;
  handleDrawerClose: () => void;
};

const DrawerContent = (props: IDrawerContent) => {
  const { open, handleDrawerClose } = props;
  const { INDEX, ABOUT_US } = ROUTE_PATH;

  return (
    <Fragment>
      <DrawerHeader sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ ml: 8.5, opacity: open ? 1 : 0, transition: 'all .5s' }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft color="primary" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ p: 0 }}>
        <ListItem text="Home" open={open} link={INDEX} onClick={handleDrawerClose}>
          <Widgets color="primary" />
        </ListItem>
        <ListItem text="About Us" open={open} link={ABOUT_US} onClick={handleDrawerClose}>
          <Groups color="primary" />
        </ListItem>
      </List>
    </Fragment>
  );
};

export default memo(DrawerContent);
