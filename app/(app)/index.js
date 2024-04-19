import { Text, View } from 'react-native';
import Container from '../../src/components/Container';
import { useEffect, useState } from 'react';
import getPosts from '../../src/actions/get-posts';
import { useSession } from '../../src/hooks/SessionProvider';
import Post from '../../src/components/Post';

export default function Index() {
  const [posts, setPosts] = useState([]);
  const { session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
    (async function() {
      const response = await getPosts(session.token);
      const data = await response.json();
      setPosts(data);
    })();
  }, [session]);

  return (
    <Container>
      {posts.map(post => (
        <Post
          key={post.uuid}
          post={post}
        />
      ))}
    </Container>
  );
}
