import { Avatar, Card, IconButton, Text, useTheme } from 'react-native-paper';
import { Image } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { endpoints } from '../utils/Config';
import { timeAgo } from '../utils/timeAgo';
import { useSnack } from '../providers/SnackProvider';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';

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
  const { navigate, push } = useNavigation();
  const { show, hide } = useSnack();
  const theme = useTheme();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`${endpoints.web}/post/${uuid}`);
    show("Link copied!");
    setTimeout(() => hide(), 2000);
  };

  return (
    <Card
      style={{
        marginVertical: 4,
    }}
    >
      <Card.Title
        title={userDisplayName}
        titleStyle={{
          fontSize: 20,
          paddingTop: 0,
          lineHeight: 28,
        }}
        subtitle={timeAgo.format(created)}
        subtitleStyle={{
          lineHeight: 14,
        }}
        leftStyle={{
          marginRight: 8,
        }}
        style={{
          padding: 8,
          minHeight: 0,
        }}
        left={() => (
          <Avatar.Image
            alt={userDisplayName}
            source={() => (
              <Image
                source={{uri: profilePic}}
                style={{
                  height: 42,
                  borderRadius: 72.5,
                  borderWidth: 0,
                }}
              />
            )}
            size={42}
          />
        )}
      />
      <Card.Content>
        <Text style={{fontSize: 16, lineHeight: 24}}>{text}</Text>
      </Card.Content>
      <Card.Actions
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <IconButton
          icon={() => <FontAwesome name="comment-o" size={24} color={theme.colors.primary} />}
          onPress={() => navigate({
            name: 'post/[uuid]',
            params: {
              uuid
            }
          })}
          mode={"contained"}
          style={{
            margin: 0,
          }}
        />
        <IconButton
          icon={() => <FontAwesome name="heart-o" size={24} color={theme.colors.primary} />}
          onPress={() => null}
        />
        <IconButton
          icon={() => <MaterialIcons name="repeat" size={24} color={theme.colors.primary} />}
          onPress={() => null}
        />
        <IconButton
          icon={() => <AntDesign name="link" size={24} color={theme.colors.primary} />}
          onPress={copyToClipboard}
        />
      </Card.Actions>
    </Card>
  );
}
