import { Dispatch, SetStateAction } from 'react';
import { switchClassName } from './styles';
import { IInput, IPersonData } from './types';

const toggleSwitch = (input: IInput) => {
  if (input.ref.current?.parentElement) {
    input.ref.current.parentElement.className = switchClassName;
  }
};

const getValue = (input: IInput) => input.ref.current?.[input.name];

const getPersonData = (arr: IInput[]) => ({
  name: getValue(arr[0]),
  surName: getValue(arr[1]),
  birthday: getValue(arr[2]),
  country: getValue(arr[3]),
  img: arr[4].ref.current?.files?.[0],
});

const submitForm = (
  arr: IInput[],
  setData: Dispatch<SetStateAction<IPersonData[]>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  arr.forEach((input) => (getValue(input) ? input.setValid(false) : input.setValid(true)));
  if (!arr.every((input) => getValue(input))) return;

  setData((state) => [...state, getPersonData(arr)]);
  setSuccess(true);

  arr.forEach((input, i) => {
    if (i === 5) toggleSwitch(arr[5]);
    if (input.ref.current) {
      input.ref.current.value = '';
      input.ref.current.checked = false;
    }
  });
};

export { submitForm, getPersonData, getValue, toggleSwitch };
