import { useState, useRef } from 'react';
import { IInput, IRefInput } from '../lib/types';

const useForm = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validSurname, setValidSurname] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [validSelect, setValidSelect] = useState(false);
  const [validUpload, setValidUpload] = useState(false);
  const [validSwitch, setValidSwitch] = useState(false);
  const [validCheck, setValidCheck] = useState(false);

  const refMap: IInput[] = [
    { name: 'value', ref: useRef<IRefInput>(null), valid: validName, setValid: setValidName },
    { name: 'value', ref: useRef<IRefInput>(null), valid: validSurname, setValid: setValidSurname },
    { name: 'value', ref: useRef<IRefInput>(null), valid: validDate, setValid: setValidDate },
    { name: 'value', ref: useRef<IRefInput>(null), valid: validSelect, setValid: setValidSelect },
    { name: 'value', ref: useRef<IRefInput>(null), valid: validUpload, setValid: setValidUpload },
    { name: 'checked', ref: useRef<IRefInput>(null), valid: validSwitch, setValid: setValidSwitch },
    { name: 'checked', ref: useRef<IRefInput>(null), valid: validCheck, setValid: setValidCheck },
  ];
  return { refMap, isDisabled, setDisabled, success, setSuccess };
};

export { useForm };
