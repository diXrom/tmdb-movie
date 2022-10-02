import { InputLabelProps } from '@mui/material';
import { SlideProps } from '@mui/material/Slide';

import { getPersonData } from './util';

type IRefInput = HTMLInputElement;

type IPersonData = ReturnType<typeof getPersonData>;

type ITransitionUp = Omit<SlideProps, 'direction'>;

interface IInput {
  name: keyof HTMLInputElement;
  valid: boolean;
  ref: React.RefObject<HTMLInputElement>;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IForm {
  setData: React.Dispatch<React.SetStateAction<IPersonData[]>>;
}

interface ISelectGroup {
  selectRef: IInput;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IInputGroup {
  inputRef: IInput;
  label: string;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  InputLabelProps?: Partial<InputLabelProps> | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
}

interface ICheckBoxGroup {
  switchRef: IInput;
  checkboxRef: IInput;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISuccessSnack {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export type {
  IInput,
  IForm,
  IPersonData,
  IRefInput,
  ISelectGroup,
  IInputGroup,
  ICheckBoxGroup,
  ISuccessSnack,
  ITransitionUp,
};
