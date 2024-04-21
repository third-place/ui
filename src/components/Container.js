import { ScrollView } from 'react-native';
import { SnackProvider } from '../hooks/SnackProvider';

export default function Container({ children }) {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <SnackProvider>
        {children}
      </SnackProvider>
    </ScrollView>
  );
}
