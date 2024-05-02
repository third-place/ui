import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { SnackProvider } from '../hooks/SnackProvider';

export default function Container({ children, refreshControl }) {
  const Outer = Platform.OS === "web" ?
    ({children}) => <>{children}</> :
    ({children}) => <SafeAreaView>{children}</SafeAreaView>;
  return (
    <Outer>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        refreshControl={refreshControl}
      >
        <SnackProvider>
          {children}
        </SnackProvider>
      </ScrollView>
    </Outer>
  );
}
