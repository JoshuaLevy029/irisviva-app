import { asyncPrefix } from '@/config/storage.config';
import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useReducer } from 'react';
import { Platform } from 'react-native';

type StorageState<T> = [boolean, T | null];
type StorageHook<T> = [StorageState<T>, (value: T | null) => void];

function useAsyncState<T>(initialState: StorageState<T> = [true, null]): StorageHook<T> {
  return useReducer((state: StorageState<T>, action: T | null = null): StorageState<T> => [false, action], initialState) as StorageHook<T>;
}

async function setStorageItem(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (error) {
      console.error('Local storage is unavailable:', error);
    }
  } else {
    if (value === null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

export function useStorage(key: string): StorageHook<string> {
  const [state, setState] = useAsyncState<string>();

  useEffect(() => {
    const storageKey = `${asyncPrefix}.${key}`;
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(localStorage.getItem(storageKey));
        }
      } catch (error) {
        console.error('Local storage is unavailable:', error);
      }
    } else {
      SecureStore.getItemAsync(storageKey).then((value) => setState(value));
    }
  }, [key]);

  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItem(`${asyncPrefix}.${key}`, value);
    },
    [key],
  );

  return [state, setValue];
}
