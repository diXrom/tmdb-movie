interface IModalProps {
  children: JSX.Element[] | JSX.Element;
  open: boolean;
  handleClose: () => void;
}

export type { IModalProps };
