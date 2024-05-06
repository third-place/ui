import { SessionProvider } from '../src/providers/SessionProvider';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const muiTheme = useMaterial3Theme();

  const theme =
    colorScheme === 'dark'
      ? DarkTheme
      : DefaultTheme;

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: muiTheme.theme.dark }
      : { ...MD3LightTheme, colors: muiTheme.theme.light };

  return (
    <SafeAreaProvider>
      <SessionProvider>
        <ThemeProvider value={theme}>
          <PaperProvider theme={paperTheme}>
            <Slot />
          </PaperProvider>
        </ThemeProvider>
      </SessionProvider>
    </SafeAreaProvider>
  );
}
