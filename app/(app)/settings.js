import { router } from 'expo-router';
import {
  Button, List,
  RadioButton,
  Text,
  useTheme
} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Container from '../../src/components/Container';
import { useSession } from '../../src/providers/SessionProvider';
import { useCustomTheme } from '../../src/providers/CustomThemeProvider';
import HeaderText from '../../src/components/typography/HeaderText';

export default function Settings() {
  const { signOut } = useSession();
  const { theme, setTheme } = useCustomTheme();
  const paperTheme = useTheme();

  return (
    <Container>
      <HeaderText>Profile</HeaderText>
      <List.Section>
        <List.Item
          title="Upload New Profile Picture"
          left={() => <FontAwesome name="picture-o" size={24} color={paperTheme.colors.primary} />}
          onPress={() => router.push("/change-password")}
        />
        <List.Item
          title="Change Password"
          left={() => <MaterialCommunityIcons name="form-textbox-password" size={24} color={paperTheme.colors.primary} />}
          onPress={() => router.push("/change-password")}
        />
      </List.Section>
      <HeaderText>Display</HeaderText>
      <RadioButton.Group onValueChange={setTheme} value={theme}>
        <RadioButton.Item label="System (default)" value="default" />
        <RadioButton.Item label="Light" value="light" />
        <RadioButton.Item label="Dark" value="dark" />
      </RadioButton.Group>
      <HeaderText>Session</HeaderText>
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
