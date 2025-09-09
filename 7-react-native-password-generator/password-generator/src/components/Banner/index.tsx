import { Text, Image, View } from "react-native";

//@ts-ignore
import batLogo from "../../../assets/bat-logo.png";
import { styles } from "./style";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image style={{ height: 180 }} resizeMode="contain" source={batLogo} />
      <Text style={styles.title}>Bat Password Generator</Text>
    </View>
  );
}
