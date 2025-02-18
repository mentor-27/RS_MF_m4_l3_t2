import { useState } from 'react';
import {
  UseLocalStorage,
  LocalStorageReturnValue,
  LocalStorageSetValue,
} from '../types';

export const useLocalStorage: UseLocalStorage = key => {
  const [value, setValue] = useState<LocalStorageReturnValue>(
    localStorage.getItem(key)
  );

  const setItem = (value: LocalStorageSetValue) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue('');
  };

  return [
    value,
    {
      setItem,
      removeItem,
    },
  ];
};
