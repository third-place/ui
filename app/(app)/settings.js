import Container from '../../src/components/Container';
import { Link, router } from 'expo-router';
import { Switch, Text } from 'react-native-paper';
import { useSession } from '../../src/providers/SessionProvider';
import { useCustomTheme } from '../../src/providers/CustomThemeProvider';

export default function Settings() {
  const { signOut } = useSession();
  const { theme, setTheme } = useCustomTheme();

  return (
    <Container>
      <Text>
        Light
      </Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <Text>
        Dark
      </Text>
      <Link href={"#"} onPress={() => {
        signOut();
        router.replace("/");
      }}>
        Sign out
      </Link>
    </Container>
  );
}
