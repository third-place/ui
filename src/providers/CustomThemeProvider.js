import { createContext, useContext } from 'react';
import { useStorageState } from './useStorageState';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import {Appearance} from 'react-native';

const defaultTheme = Appearance.getColorScheme();

const CustomThemeContext = createContext({
  theme: defaultTheme,
  setTheme: theme => {},
});

export function useCustomTheme() {
  return useContext(CustomThemeContext);
}

export function CustomThemeProvider({ children }) {
  const [
    [
      isLoading,
      theme,
    ],
    setTheme,
  ] = useStorageState('customTheme');

  const muiTheme = useMaterial3Theme();
  const themeToCompare = theme === "default" ? defaultTheme : theme;

  const colorScheme =
    themeToCompare === 'dark'
      ? DarkTheme
      : DefaultTheme;

  const paperColorScheme =
    themeToCompare === 'dark'
      ? { ...MD3DarkTheme, colors: muiTheme.theme.dark }
      : { ...MD3LightTheme, colors: muiTheme.theme.light };

  return (
    <CustomThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider value={colorScheme}>
        <PaperProvider theme={paperColorScheme}>
          {children}
        </PaperProvider>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
