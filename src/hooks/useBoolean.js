import {useCallback, useState} from 'react';

export default function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const setValueTrue = useCallback(() => setValue(true), []);
  const setValueFalse = useCallback(() => setValue(false), []);
  const setValueToggle = useCallback(
    () => setValue(prevState => !prevState),
    [],
  );

  return [value, setValueTrue, setValueFalse, setValueToggle];
}
