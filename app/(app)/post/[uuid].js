import Container from '../../../src/components/Container';
import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import getPost from '../../../src/actions/get-post';
import { useSession } from '../../../src/hooks/SessionProvider';
import { default as PostComponent } from '../../../src/components/Post';

export default function Post() {
  const [post, setPost] = useState(null);
  const { uuid } = useLocalSearchParams();
  const { session } = useSession();

  useEffect(() => {
    (async function() {
      const response = await getPost(session.token, uuid);
      setPost(await response.json());
    })();
  }, []);

  if (!post) {
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
