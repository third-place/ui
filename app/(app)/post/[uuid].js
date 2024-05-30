import Container from '../../../src/components/Container';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import { Button, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import getPost from '../../../src/actions/get-post';
import { useSession } from '../../../src/providers/SessionProvider';
import { default as PostComponent } from '../../../src/components/Post';

export default function Post() {
  const [post, setPost] = useState(null);
  const { uuid } = useLocalSearchParams();
  const { session } = useSession();
  const { goBack } = useNavigation();

  useEffect(() => {
    (async function() {
      console.log(uuid);
      const response = await getPost(session.token, uuid);
      if (response.status === 200) {
        setPost(await response.json());
      }
    })();
  }, [uuid]);

  if (!post) {
    return (
      <Container>
        <Text>Loading</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Button
        onPress={goBack}
      >
        Back
      </Button>
      <PostComponent post={post} />
    </Container>
  )
}
