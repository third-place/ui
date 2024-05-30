import { router } from 'expo-router';
import {
  Button,
  RadioButton,
  Text
} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import Container from '../../src/components/Container';
import { useSession } from '../../src/providers/SessionProvider';
import { useCustomTheme } from '../../src/providers/CustomThemeProvider';
import HeaderText from '../../src/components/typography/HeaderText';

export default function Settings() {
  const { signOut } = useSession();
  const { theme, setTheme } = useCustomTheme();

  return (
    <Container>
      <HeaderText>
        Display
      </HeaderText>
      <RadioButton.Group onValueChange={setTheme} value={theme}>
        <RadioButton.Item label="System (default)" value="default" />
        <RadioButton.Item label="Light" value="light" />
        <RadioButton.Item label="Dark" value="dark" />
      </RadioButton.Group>
      <HeaderText>
        Session
      </HeaderText>
      <Text>
        <Button
          icon={() => <FontAwesome name="sign-out" size={24} />}
          onPress={() => {
            signOut();
            router.replace("/");
          }}
          mode="contained"
        >
          Sign out
        </Button>
      </Text>
    </Container>
  );
}
