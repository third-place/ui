import { View, Platform, Image } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useSession } from '../src/hooks/SessionProvider';
import Container from '../src/components/Container';
import {default as signInAction} from '../src/actions/sign-in';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { signIn } = useSession();

  const submitSignIn = async (event) => {
    event.preventDefault();
    setError(false);
    try {
      setLoading(true);
      const response = await signInAction(email, password);
      setLoading(false);
      if (response.status !== 201) {
        setError(true);
        return;
      }
      const data = await response.json();
      signIn(data);
      router.replace("/");
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'web') {
      const listener = async event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          await submitSignIn(event);
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
      }
  }, []);

  return (
    <Container>
      <View style={{width: 400}}>
        <TextInput
            placeholder={"Email Address"}
            value={email}
            onChangeText={setEmail}
            style={{marginVertical: 4}}
            disabled={loading}
        />
        <TextInput
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{marginVertical: 4}}
          disabled={loading}
        />
        <HelperText type={"error"} visible={error}>
          Failed to sign in with the provided email and password
        </HelperText>
        <Button
          icon={loading ? () =>
            <ActivityIndicator animating={true} color={MD2Colors.grey600} /> : "login"}
          mode={"contained"}
          onPress={submitSignIn}
          style={{marginVertical: 4}}
          disabled={loading}
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
