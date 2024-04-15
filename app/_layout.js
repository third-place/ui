import { SessionProvider } from '../src/hooks/SessionProvider';
import { Slot } from 'expo-router';

export default function AppLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
