import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";

type BatButtonType = {
  title: string;
  generate?: () => void;
  copy?: () => void;
};

export default function BatButton({ title, generate, copy }: BatButtonType) {
  const customPressable = generate || copy;

  return (
    <TouchableOpacity
      onPress={customPressable}
      activeOpacity={0.5}
      style={[styles.container]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
