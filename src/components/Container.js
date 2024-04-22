import { ScrollView } from 'react-native';
import { SnackProvider } from '../hooks/SnackProvider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Container({ children, refreshControl }) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      refreshControl={refreshControl}
    >
      <SnackProvider>
        {children}
      </SnackProvider>
    </ScrollView>
  );
}
