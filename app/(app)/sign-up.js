import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';
import Container from '../../src/components/Container';
import Styles from '../../src/components/Styles';

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
        style={Styles.input}
      />
      <TextInput
        placeholder={"Username"}
        value={username}
        onChangeText={setUsername}
        style={Styles.input}
      />
      <TextInput
        placeholder={"Password"}
        value={password}
        onChangeText={setPassword}
        style={Styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder={"Password (Again)"}
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        style={Styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder={"Invite Code"}
        value={inviteCode}
        onChangeText={setInviteCode}
        style={Styles.input}
      />
      <Button
        icon={"login"}
        mode={"contained"}
        onPress={() => {
          router.replace("/");
        }}
        style={Styles.input}
      >
        Signup
      </Button>
    </Container>
  );
}
