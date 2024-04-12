import { SessionProvider } from '../src/SessionProvider';
import { Slot } from 'expo-router';

export default function AppLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
