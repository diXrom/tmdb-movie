import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATH } from 'shared/common/constants';

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => setOpen(false), []);
  const { pathname } = useLocation();
  const { INDEX } = ROUTE_PATH;

  const hasFooter = useCallback(() => pathname !== INDEX, [INDEX, pathname]);

  return { open, handleDrawerOpen, handleDrawerClose, hasFooter };
};

export { useDrawer };
