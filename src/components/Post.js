import { Avatar, Card, IconButton, Text, Snackbar } from 'react-native-paper';
import { Image } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { endpoints } from '../utils/Config';
import { timeAgo } from '../utils/timeAgo';
import { useState } from 'react';
import { useSnack } from '../hooks/SnackProvider';

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
  const { navigate } = useNavigation();
  const { show, hide } = useSnack();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(`${endpoints.web}/post/${uuid}`);
    show("Link copied!");
    setTimeout(() => hide(), 2000);
  };

  const dismissCopyToClipboard = () => setShowLinkCopied(false);

  return (
    <Card style={{minWidth: 400}}>
      <Card.Title
        title={userDisplayName}
        subtitle={timeAgo.format(created)}
        left={() => (
          <Avatar.Image
            alt={userDisplayName}
            source={() => <Image source={{uri: profilePic}} />}
            style={{width: 36, height: 36}}
          />
        )}
      />
      <Card.Content>
        <Text>{text}</Text>
      </Card.Content>
      <Card.Actions>
        <IconButton
          icon={() => <FontAwesome name="comment-o" size={24} color="black" />}
          onPress={() => navigate({
            name: 'post/[uuid]',
            params: {
              uuid
            }
          })}
          mode={"contained"}
          theme={{
            colors: "background",
          }}
        />
        <IconButton
          icon={() => <FontAwesome name="heart-o" size={24} color="black" />}
          onPress={() => null}
          theme={{
            colors: "background",
          }}
        />
        <IconButton
          icon={() => <MaterialIcons name="repeat" size={24} color="black" />}
          onPress={() => null}
          theme={{
            colors: "background",
          }}
        />
        <IconButton
          icon={() => <AntDesign name="link" size={24} color="black" />}
          onPress={copyToClipboard}
          theme={{
            colors: "background",
          }}
        />
      </Card.Actions>
    </Card>
  );
}
