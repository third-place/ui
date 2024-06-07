import { View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import Styles from '../Styles';
import { useState } from 'react';
import resetPassword from '../../actions/resetPassword';
import { router } from 'expo-router';

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);

  const submitResetPassword = async event => {
    event.preventDefault();
    setError(false);
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    const response = await resetPassword(email, password, otp);
    if (response.status === 200) {
      router.push("/sign-in");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={Styles.input}
      />
      <TextInput
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        style={Styles.input}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={Styles.input}
        secureTextEntry={true}
      />
      {error && (
        <HelperText type="error" visible={error}>
          Passwords do not match
        </HelperText>
      )}
      <TextInput
        placeholder="One Time Password (from email)"
        value={otp}
        onChangeText={setOtp}
        style={Styles.input}
      />

      <Button
        icon={"key"}
        mode={"contained"}
        onPress={submitResetPassword}
        style={Styles.input}
      >
        Submit
      </Button>
    </View>
  );
}
