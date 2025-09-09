import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type BatLengthAreaButtonType = {
  title: string;
  increase?: () => void;
  decrement?: () => void;
};

export default function BatLengthAreaButton({
  title,
  increase,
  decrement,
}: BatLengthAreaButtonType) {
  const typeOfChange = increase || decrement;

  return (
    <TouchableOpacity
      onPress={typeOfChange}
      activeOpacity={0.5}
      style={styles.container}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
