import { FC, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ListItem as List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { IListItem } from '../lib/types';

const ListItemMenu: FC<IListItem> = (props) => {
  const { open, text, children, onClick, disabled, link } = props;
  const { pathname } = useLocation();

  return (
    <NavLink to={link} className="navLink" end={!pathname.includes('movie')}>
      <List disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={{ minHeight: 68, px: 2.5 }} onClick={onClick} disabled={disabled}>
          <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center' }}>
            {children}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, transition: 'all .3s' }} />
        </ListItemButton>
      </List>
    </NavLink>
  );
};

export default memo(ListItemMenu);
