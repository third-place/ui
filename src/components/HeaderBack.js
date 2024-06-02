import { useNavigation } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function () {
  const { navigate } = useNavigation();
  const theme = useTheme();

  return (
    <Button icon={() => <Ionicons name="arrow-back" size={24} color={theme.colors.primary} />} onPress={() => navigate("index")}>
      Home
    </Button>
  );
}
