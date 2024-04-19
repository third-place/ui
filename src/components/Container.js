import { View } from 'react-native';
import { SnackProvider } from '../hooks/SnackProvider';

export default function Container({ children }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <SnackProvider>
        {children}
      </SnackProvider>
    </View>
  );
}
