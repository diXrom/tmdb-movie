import { InputLabelProps } from '@mui/material';
import { SlideProps } from '@mui/material/Slide';
import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';

import { getPersonData } from './util';

type IPersonData = ReturnType<typeof getPersonData>;

type ITransitionUp = Omit<SlideProps, 'direction'>;

interface IInputState {
  value: boolean | string | File | Dayjs | null | undefined;
  valid: boolean;
}
interface IInput {
  name: string;
  input: IInputState;
  setInput: Dispatch<SetStateAction<IInputState>>;
}
interface IForm {
  setData: (payload: IPersonData) => void;
}

interface ISelectGroup {
  selectRef: IInput;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IInputGroup {
  state: IInput;
  label: string;
  InputLabelProps?: Partial<InputLabelProps> | undefined;
  type?: HTMLInputTypeAttribute | undefined;
}

interface ICheckBoxGroup {
  switchState: IInput;
  checkboxState: IInput;
}

interface ISuccessSnack {
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

export type {
  IInput,
  IForm,
  IPersonData,
  ISelectGroup,
  IInputGroup,
  ICheckBoxGroup,
  ISuccessSnack,
  ITransitionUp,
  IInputState,
};
