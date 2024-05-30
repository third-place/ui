import { Text } from 'react-native-paper';

export default function ({ children }) {
  return (
    <Text variant="displayLarge" style={{marginVertical: 16}}>
      {children}
    </Text>
  );
}
