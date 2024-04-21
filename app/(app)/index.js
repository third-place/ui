import { Text, View } from 'react-native';
import Container from '../../src/components/Container';
import { useEffect, useState } from 'react';
import getPosts from '../../src/actions/get-posts';
import { useSession } from '../../src/hooks/SessionProvider';
import Post from '../../src/components/Post';
import NewPost from '../../src/components/NewPost';
import { HelperText } from 'react-native-paper';

export default function Index() {
  const [posts, setPosts] = useState([]);
  const [errorLoading, setErrorLoading] = useState(false);
  const { session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
    (async function() {
      try {
        const response = await getPosts(session.token);
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        setErrorLoading(true);
      }
    })();
  }, [session]);

  return (
    <Container>
      <View style={{width: 400}}>
        { errorLoading && (
          <HelperText type="error">
            Error loading posts
          </HelperText>
        )}
        <NewPost />
        {posts.map(post => (
          <Post
            key={post.uuid}
            post={post}
          />
        ))}
      </View>
    </Container>
  );
}
