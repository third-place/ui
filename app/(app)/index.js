import { Link, router } from 'expo-router';
import { useSession } from '../../src/hooks/SessionProvider';
import Container from '../../src/components/Container';

export default function Home() {
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
