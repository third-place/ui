import { SessionProvider } from '../src/hooks/SessionProvider';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </SafeAreaProvider>
  );
}
