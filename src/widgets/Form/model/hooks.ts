import { useState } from 'react';
import { IInput, IInputState } from '../lib/types';

const useForm = () => {
  const [inputName, setName] = useState<IInputState>({ value: '', valid: false });
  const [inputSurname, setSurname] = useState<IInputState>({ value: '', valid: false });
  const [inputDate, setDate] = useState<IInputState>({ value: null, valid: false });
  const [inputSelect, setSelect] = useState<IInputState>({ value: '', valid: false });
  const [inputUpload, setUpload] = useState<IInputState>({ value: null, valid: false });
  const [inputSwitch, setSwitch] = useState<IInputState>({ value: false, valid: false });
  const [inputCheckbox, setCheckbox] = useState<IInputState>({ value: false, valid: false });
  const [success, setSuccess] = useState(false);

  const inputMap: IInput[] = [
    { name: 'input', input: inputName, setInput: setName },
    { name: 'input', input: inputSurname, setInput: setSurname },
    { name: 'date', input: inputDate, setInput: setDate },
    { name: 'input', input: inputSelect, setInput: setSelect },
    { name: 'file', input: inputUpload, setInput: setUpload },
    { name: 'checked', input: inputSwitch, setInput: setSwitch },
    { name: 'checked', input: inputCheckbox, setInput: setCheckbox },
  ];
  return { inputMap, success, setSuccess };
};

export { useForm };
