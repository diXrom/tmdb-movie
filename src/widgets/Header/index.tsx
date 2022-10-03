import { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { IHeader } from './lib/types';
import { iconStyle, AppBar as BarHeader, HeaderStyle } from './lib/styles';
import SearchPanel from './ui/SearchPanel';

const Header: FC<IHeader> = (props) => {
  const { open, handleDrawerOpen } = props;
  const { pathname } = useLocation();

  return (
    <BarHeader position="fixed" open={open}>
      <Toolbar>
        <IconButton color="secondary" onClick={handleDrawerOpen} edge="start" sx={iconStyle(open)}>
          <Menu />
        </IconButton>
        <Box sx={HeaderStyle}>
          <Link to="/" className="navLink">
            <IconButton color="secondary" sx={{ opacity: Number(!open) }}>
              <Typography
                variant="h5"
                noWrap
                component="h1"
                sx={{ fontWeight: 'bold', display: { xs: 'none', md: 'block' } }}
              >
                Components
              </Typography>
            </IconButton>
          </Link>
          {pathname === '/' && <SearchPanel />}
        </Box>
      </Toolbar>
    </BarHeader>
  );
};

export default memo(Header);
