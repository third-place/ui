import Container from '../src/components/Container';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  return (
    <Container>
      <TextInput
        placeholder={"Email Address"}
        value={email}
        onChangeText={setEmail}
        style={{marginVertical: 4}}
      />
      <TextInput
        placeholder={"Username"}
        value={username}
        onChangeText={setUsername}
        style={{marginVertical: 4}}
      />
      <TextInput
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
        style={{marginVertical: 4}}
        secureTextEntry
      />
      <TextInput
        placeholder={"Password (Again)"}
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        style={{marginVertical: 4}}
        secureTextEntry
      />
      <TextInput
        placeholder={"Invite Code"}
        value={inviteCode}
        onChangeText={setInviteCode}
        style={{marginVertical: 4}}
      />
      <Button
        icon={"login"}
        mode={"contained"}
        onPress={() => {
          router.replace("/");
        }}
        style={{marginVertical: 4}}
      >
        Signup
      </Button>
    </Container>
  );
}
