import {useState} from 'react';

export default function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const setValueTrue = () => setValue(true);
  const setValueFalse = () => setValue(false);
  const setValueToggle = () => setValue(prevState => !prevState);

  return [value, setValueTrue, setValueFalse, setValueToggle];
}
