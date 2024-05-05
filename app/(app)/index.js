import { RefreshControl, View } from 'react-native';
import Container from '../../src/components/Container';
import { useCallback, useEffect, useState } from 'react';
import getPosts from '../../src/actions/get-posts';
import { useSession } from '../../src/providers/SessionProvider';
import Post from '../../src/components/Post';
import NewPost from '../../src/components/NewPost';
import { HelperText } from 'react-native-paper';

export default function Index() {
  const [posts, setPosts] = useState([]);
  const [errorLoading, setErrorLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { session } = useSession();

  const loadPosts = useCallback(async () => {
    setErrorLoading(false);
    try {
      const response = await getPosts(session.token);
      const data = await response.json();
      setPosts(data);
    } catch (e) {
      setErrorLoading(true);
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadPosts();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    if (!session) {
      return;
    }
    (async function() {
      await loadPosts();
    })();
  }, [session]);

  return (
    <Container refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
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
    </Container>
  );
}
