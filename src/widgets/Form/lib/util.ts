import { nanoid } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { IInput, IPersonData } from './types';

const getValue = ({ name, input }: IInput) => {
  if (name === 'date') return (input.value as dayjs.Dayjs)?.year() || null;
  return input.value;
};

const getPersonData = (arr: IInput[]) => ({
  id: nanoid(),
  name: arr[0].input.value,
  surName: arr[1].input.value,
  birthday: new Date((arr[2].input.value as dayjs.Dayjs).valueOf()).toLocaleDateString(),
  country: arr[3].input.value,
  img: arr[4].input.value,
});

const submitForm = (
  arr: IInput[],
  setData: (payload: IPersonData) => void,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  arr.forEach((item) => getValue(item) || item.setInput((state) => ({ ...state, valid: true })));
  if (!arr.every((item) => getValue(item))) return;

  setData(getPersonData(arr));
  setSuccess(true);

  arr.forEach(({ name, input }) => {
    if (name === 'date') input.value = null;
    if (name === 'input') input.value = '';
    if (name === 'checked') input.value = false;
    if (name === 'file') input.value = null;
  });
};

export { getPersonData, submitForm, getValue };
