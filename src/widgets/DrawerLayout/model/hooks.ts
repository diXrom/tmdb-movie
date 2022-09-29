import { useCallback, useState } from 'react';

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => setOpen(false), []);

  return { open, handleDrawerOpen, handleDrawerClose };
};

export { useDrawer };
