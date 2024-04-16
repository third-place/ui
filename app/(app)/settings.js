import Container from '../../src/components/Container';
import { Link, router } from 'expo-router';
import { useSession } from '../../src/hooks/SessionProvider';

export default function SettingsTab() {
  const { signOut } = useSession();
  return (
    <Container>
      <Link href={"#"} onPress={() => {
        signOut();
        router.replace("/");
      }}>
        Sign out
      </Link>
    </Container>
  );
}
