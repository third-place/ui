import { useCallback, useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { HelperText, Button, Text } from 'react-native-paper';
import Container from '../../src/components/Container';
import getPosts from '../../src/actions/getPosts';
import { useSession } from '../../src/providers/SessionProvider';
import Post from '../../src/components/Post';
import NewPost from '../../src/components/NewPost';
import Loading from '../../src/components/Loading';
import { router } from 'expo-router';
import HeaderText from '../../src/components/typography/HeaderText';

export default function Index() {
  const [posts, setPosts] = useState([]);
  const [errorLoading, setErrorLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { session, isLoading } = useSession();

  const loadPosts = useCallback(async () => {
    setErrorLoading(false);
    try {
      const response = await getPosts(session?.token);
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
    if (session) {
      (async function () {
        await loadPosts();
      })();
    }
  }, [session]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (!session) {
    return (
      <Container>
        <HeaderText>Thirdplace</HeaderText>
        <Button mode="contained" onPress={() => router.push('/sign-in')}>Sign In</Button>
        <View style={{alignItems: 'center', padding: 20}}>
          <Text>or</Text>
        </View>
        <Button mode="contained" onPress={() => router.push('/sign-up')}>Create An Account</Button>
      </Container>
    );
  }

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
          linkCard
        />
      ))}
    </Container>
  );
}
