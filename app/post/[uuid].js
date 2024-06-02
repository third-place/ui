import { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';
import Container from '../../src/components/Container';
import getPost from '../../src/actions/getPost';
import { useSession } from '../../src/providers/SessionProvider';
import { default as PostComponent } from '../../src/components/Post';

export default function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const { uuid } = useLocalSearchParams();
  const { session } = useSession();

  useEffect(() => {
    (async function() {
      const response = await getPost(session?.token, uuid);
      if (response.status === 200) {
        setPost(await response.json());
      }
      setIsLoading(false);
    })();
  }, [uuid]);

  if (isLoading) {
    return (
      <Container>
        <Text>Loading</Text>
      </Container>
    );
  }

  return (
    <Container>
      <PostComponent post={post} />
    </Container>
  )
}
