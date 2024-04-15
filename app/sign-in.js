import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useSession } from '../src/hooks/SessionProvider';
import Container from '../src/components/Container';
import {default as signInAction} from '../src/actions/sign-in';
import { router } from 'expo-router';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSession();

  const submitSignIn = async (event) => {
    event.preventDefault();
    const response = await signInAction(email, password);
    if (response.status !== 201) {
      return;
    }
    const data = await response.json();
    signIn(data);
    router.replace("/");
  };

  useEffect(() => {
    const listener = async event => {
      console.log("listener", event.code);
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        await submitSignIn(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Container>
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
          onPress={submitSignIn}
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
    </Container>
  );
}
