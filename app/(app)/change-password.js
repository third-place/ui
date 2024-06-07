import { Button, TextInput } from 'react-native-paper';
import { Redirect } from 'expo-router';
import { useState } from 'react';
import Container from '../../src/components/Container';
import { useSession } from '../../src/providers/SessionProvider';
import Styles from '../../src/components/Styles';
import Loading from '../../src/components/Loading';

export default function () {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const { session, isLoading } = useSession();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (!session) {
    return (
      <Redirect href="/sign-in" />
    );
  }

  return (
    <Container>
      <TextInput
        placeholder="Current Password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        style={Styles.input}
      />
      <TextInput
        placeholder="New Password"
        value={newPassword1}
        onChangeText={setNewPassword1}
        style={Styles.input}
      />
      <TextInput
        placeholder="New Password (again)"
        value={newPassword2}
        onChangeText={setNewPassword2}
        style={Styles.input}
      />
      <Button
        icon={"key-change"}
        mode={"contained"}
        onPress={() => {
        }}
        style={Styles.input}
      >
        Change Password
      </Button>
    </Container>
  )
}
