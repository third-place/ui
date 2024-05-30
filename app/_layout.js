import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SessionProvider } from '../src/providers/SessionProvider';
import { CustomThemeProvider } from '../src/providers/CustomThemeProvider';

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <SessionProvider>
        <CustomThemeProvider>
          <Slot />
        </CustomThemeProvider>
      </SessionProvider>
    </SafeAreaProvider>
  );
}
