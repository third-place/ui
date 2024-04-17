import { Avatar, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { Image, View } from 'react-native';
import { endpoints } from '../utils/Config';
import { timeAgo } from '../utils/timeAgo';

export default function Post({
  post: {
    uuid,
    text,
    user,
    created_at,
  },
}) {
  const userDisplayName = user.name ? `${user.name} @${user.username}` : `@${user.username}`;
  const profilePic = user.profile_pic ? `${endpoints.image}/asset/${user.profile_pic}` : '';
  const created = new Date(created_at);

  return (
    <Card style={{padding: 8, minWidth: 400}}>
      <View style={{flex: 1, flexDirection: "row", justifyContent: "flex-start"}}>
        <Avatar.Image
          alt={userDisplayName}
          source={() => <Image source={{uri: profilePic}} />}
          style={{width: 36, height: 36}}
        />
        <View style={{paddingHorizontal: 4}}>
          <Link href={`/u/${user.username}`}>
            <b>{userDisplayName}</b>
          </Link>
          <Text>{timeAgo.format(created)}</Text>
          <Link href={`post/${uuid}`} style={{lineHeight: '2em'}}>
            {text}
          </Link>
        </View>
      </View>
    </Card>
  );
}
