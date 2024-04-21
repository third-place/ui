import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { useCallback, useEffect, useReducer } from 'react';

function useAsyncState(initialValue = [true, null]) {
  return useReducer(
    (state, action) => [false, action],
    initialValue
  );
}

function setValueSafe(value) {
  if (value instanceof Object) {
    return JSON.stringify(value);
  }
  return value;
}

function getValueSafe(value) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

export async function setStorageItemAsync(key, value) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, setValueSafe(value));
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, setValueSafe(value));
    }
  }
}

export function useStorageState(key) {
  const [state, setState] = useAsyncState();

  useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(getValueSafe(localStorage.getItem(key)));
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      SecureStore.getItemAsync(key).then(value => {
        setState(getValueSafe(value));
      });
    }
  }, [key]);

  // Set
  const setValue = useCallback(
    async (value) => {
      setState(value);
      await setStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}
