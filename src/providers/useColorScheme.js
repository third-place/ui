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
  const rnColorScheme = rnUseColorScheme();

  if (!isLoading && colorScheme === null) {
    setColorScheme(rnColorScheme);
  }

  return {
    colorScheme,
    setColorScheme,
  };
}
