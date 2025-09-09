import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";

type BatPasswordAreaType = {
  passwordValue: string;
};

export default function BatPasswordArea({
  passwordValue,
}: BatPasswordAreaType) {
  return (
    <>
      <TextInput
        value={passwordValue}
        editable={false}
        style={styles.password}
      />
    </>
  );
}
