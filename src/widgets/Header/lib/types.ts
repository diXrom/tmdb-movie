import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface IAppBar extends MuiAppBarProps {
  open?: boolean;
}

interface IHeader {
  open: boolean;
  handleDrawerOpen: () => void;
}

export type { IHeader, IAppBar };
