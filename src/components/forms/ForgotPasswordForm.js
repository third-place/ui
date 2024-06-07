import { View } from 'react-native';
import { Banner, Button, TextInput } from 'react-native-paper';
import Styles from '../Styles';
import { useState } from 'react';
import forgotPassword from '../../actions/forgotPassword';

export default function () {
  const [email, setEmail] = useState('');
  const [bannerVisible, setBannerVisible] = useState(false);

  const submitForgotPassword = async event => {
    event.preventDefault();
    await forgotPassword(email);
    setBannerVisible(true);
  };

  return (
    <View>
      <Banner
        visible={bannerVisible}
        actions={[{
          label: "Ok",
          onPress: () => setBannerVisible(false),
        }]}
      >
        Your forgot password request has been submitted.  Please check your email to proceed.
      </Banner>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={Styles.input}
      />
      <Button
        icon={"key"}
        mode={"contained"}
        onPress={submitForgotPassword}
        style={Styles.input}
      >
        Submit
      </Button>
    </View>
  );
}
