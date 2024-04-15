import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSession } from '../src/SessionProvider';

export default function LoginTab() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSession();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View style={{width: 400}}>
        <TextInput
            placeholder={"Email Address"}
            value={email}
            onChangeText={setEmail}
            style={{marginVertical: 4}}
        />
        <TextInput
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{marginVertical: 4}}
        />
        <Button
          icon={"login"}
          mode={"contained"}
          onPress={() => {
            signIn();
            router.replace("/");
          }}
          style={{marginVertical: 4}}
        >
          Login
        </Button>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 4,
        }}>
          <Button
            icon={"account-plus"}
            onPress={() => navigation.navigate("signup")}
            style={{width: 180}}
          >
            Sign Up
          </Button>
          <Button
            icon={"lock-reset"}
            onPress={() => navigation.navigate("forgot-password")}
            style={{width: 180}}
          >
            Forgot Password
          </Button>
        </View>
      </View>
    </View>
  );
}
