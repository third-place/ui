import { View } from 'react-native';
import {
  ActivityIndicator,
  Button, HelperText,
  MD2Colors,
  TextInput
} from 'react-native-paper';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createPost } from '../actions/create-post';
import { useSession } from '../providers/SessionProvider';

export default function NewPost() {
  const { session } = useSession();
  const [newPost, setNewPost] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      setError(false);
      const response = await createPost(
        session.token,
        session.user.uuid,
        newPost,
        false,
        null,
      );
      // const data = await response.json();
      if (response.status === 201) {
        setNewPost("");
      }
    } catch (e) {
      setError(true);
    }
    setSubmitting(false);
  };

  return (
    <View style={{
      marginVertical: 4,
    }}>
      <TextInput
        placeholder={"What's on your mind?"}
        value={newPost}
        onChangeText={setNewPost}
        disabled={submitting}
      />
      <Button
        icon={submitting ?
          () => <ActivityIndicator animating={true} color={MD2Colors.grey600} /> :
          () => <MaterialCommunityIcons name="notebook-plus-outline" size={24} color="white" />}
        mode="contained"
        onPress={onSubmit}
        disabled={submitting}
        style={{
          marginVertical: 4,
        }}
      >
        Submit
      </Button>
      {error && (
        <HelperText type="error">
          There was an error submitting your post.
        </HelperText>
      )}
    </View>
  );
}
