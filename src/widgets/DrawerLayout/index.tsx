import { memo } from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from 'widgets/Footer';
import MiniDrawer from 'widgets/DrawerLayout/ui/MiniDrawer';
import AppBar from 'widgets/Header';
import { useDrawer } from './model/hooks';
import { DrawerHeader, drawlerStyle, ContainerStyle } from './lib/styles';

const DrawerLayout = () => {
  const { hasFooter, ...props } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar {...props} />
      <MiniDrawer {...props} />
      <Box component="main" sx={drawlerStyle}>
        <DrawerHeader />
        <Container maxWidth="xl" sx={ContainerStyle}>
          <Outlet />
        </Container>
        {hasFooter() && <Footer />}
      </Box>
    </Box>
  );
};

export default memo(DrawerLayout);
