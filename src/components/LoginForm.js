import { Platform, View } from 'react-native';
import {
  ActivityIndicator,
  Button,
  HelperText,
  MD2Colors,
  TextInput
} from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useSession } from '../hooks/SessionProvider';
import { router } from 'expo-router';
import {default as signInAction} from '../actions/sign-in';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <View>
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
    </View>
  );
}
