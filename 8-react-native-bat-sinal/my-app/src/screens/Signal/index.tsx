import { View, Text } from "react-native";
import React from "react";
import BatmanButton from "../../components/BatmanButton";
import BatmanIcon from "../../components/BatmanIcon";
import { styles } from "./styles";

type SignalType = {
  screenOptions: {
    opacity: number;
    action: () => void;
  };
};

export default function Signal({ screenOptions }: SignalType) {
  return (
    <>
      <View style={styles.container}>
        <BatmanIcon size={82} opacity={screenOptions.opacity} />
      </View>
      <View style={[styles.container, { justifyContent: "flex-start" }]}>
        <BatmanButton
          action={screenOptions.action}
          opacity={screenOptions.opacity}
          title="Activate Bat Signal"
        />
      </View>
    </>
  );
}
