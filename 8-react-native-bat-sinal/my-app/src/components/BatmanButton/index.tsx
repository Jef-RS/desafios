import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { styles } from "./styles";

type BatmanButtonType = {
  title: string;
  opacity?: number;
  action?: () => void;
};

export default function BatmanButton({
  title,
  opacity,
  action,
}: BatmanButtonType) {
  return (
    <TouchableOpacity
      onPress={action}
      style={[styles.container, { opacity: opacity }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
