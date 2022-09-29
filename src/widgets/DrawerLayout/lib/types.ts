interface IMiniDrawer {
  open: boolean;
  handleDrawerClose: () => void;
}

interface IListItem {
  open: boolean;
  text: string;
  disabled?: boolean;
  link: string;
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
}

export type { IMiniDrawer, IListItem };
