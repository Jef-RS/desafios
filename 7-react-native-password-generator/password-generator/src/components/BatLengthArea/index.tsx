import { View, Text, TextInput, TouchableOpacity } from "react-native";
import BatLengthAreaButton from "../BatLengthAreaButton";

type BatLengthAreaType = {
  length: number;
  changeLength: (type: string) => void;
};

export default function BatLengthArea({
  length = 8,
  changeLength,
}: BatLengthAreaType) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
      }}
    >
      <BatLengthAreaButton
        decrement={() => changeLength("decrement")}
        title="⬅️"
      />
      <TextInput
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          width: 42,
          height: 42,
          backgroundColor: "#D3DEBE",
        }}
        value={length.toString()}
      />
      <BatLengthAreaButton
        increase={() => changeLength("increase")}
        title="➡️"
      />
    </View>
  );
}
