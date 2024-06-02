import Container from '../../src/components/Container';
import { useSession } from '../../src/providers/SessionProvider';
import { Text } from 'react-native-paper';

export default function () {
  const { session } = useSession();

  return (
    <Container>
      <Text>Test</Text>
    </Container>
  )
}
