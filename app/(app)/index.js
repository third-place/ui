import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { useSession } from '../../src/SessionProvider';

export default function Home() {
  const { signOut } = useSession();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Link href={"#"} onPress={() => {
        signOut();
        router.replace("/");
      }}>
        Logout
      </Link>
    </View>
  );
}
