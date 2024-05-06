import { useColorScheme as rnUseColorScheme } from 'react-native';
import { useStorageState } from './useStorageState';

export default function useColorScheme() {
  const [
    [
      isLoading,
      colorScheme,
    ],
    setColorScheme,
  ] = useStorageState('colorScheme');

  if (!isLoading && colorScheme === null) {
    setColorScheme(rnUseColorScheme());
  }

  return {
    colorScheme,
    setColorScheme,
  };
}
