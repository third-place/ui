import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from 'expo-router';
import Container from '../../src/components/Container';
import LoginForm from '../../src/components/LoginForm';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <Container>
      <LoginForm />
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
      }}>
        <Button
          icon={"account-plus"}
          onPress={() => navigation.navigate("sign-up")}
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
    </Container>
  );
}
