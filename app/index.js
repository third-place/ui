import { Text, View } from "react-native";
import Styles from '../src/Styles';

export default function Page() {
  return (
    <View style={Styles.container}>
      <View style={Styles.main}>
        <Text style={Styles.title}>Hello World</Text>
        <Text style={Styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}
