import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { router, useNavigation } from 'expo-router';

export default function LoginTab() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View style={{width: 400}}>
        <TextInput
            placeholder={"Email Address"}
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
          placeholder={"Password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button
          icon={"login"}
          mode={"contained"}
        >
          Login
        </Button>
        <Button
          icon={"account-plus"}
          onPress={() => navigation.navigate("signup")}
        >
          Sign Up
        </Button>
        <Button
          icon={"lock-reset"}
          onPress={() => navigation.push("forgot-password")}
        >
          Forgot Password
        </Button>
      </View>
    </View>
  );
}
