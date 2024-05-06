import Container from '../../src/components/Container';
import { Link, router } from 'expo-router';
import { Switch, Text } from 'react-native-paper';
import { useSession } from '../../src/providers/SessionProvider';
import useColorScheme from '../../src/providers/useColorScheme';

export default function Settings() {
  const { signOut } = useSession();
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Container>
      <Text>
        Light
      </Text>
      <Switch
        value={colorScheme === 'dark'}
        onValueChange={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
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
