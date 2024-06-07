import { View } from 'react-native';
import { Button, TextInput, Banner } from 'react-native-paper';
import Styles from '../Styles';
import { router } from 'expo-router';
import { useState } from 'react';

export default function () {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  return (
    <View>
      <Banner visible={true} style={{marginVertical: 20}}>
        Thirdplace is currently in closed beta and requires an invite code to sign up.
      </Banner>
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
    </View>
  );
}
