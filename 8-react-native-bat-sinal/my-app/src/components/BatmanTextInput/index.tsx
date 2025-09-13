import { View, Text, TextInput, InputModeOptions } from "react-native";
import React from "react";
import { styles } from "./styles";

type BatmanInputType = {
  description: string;
  label?: string;
  isMultiline?: boolean;
  contentType: InputModeOptions;
};

export default function BatmanInput({
  description,
  label,
  contentType,
  isMultiline,
}: BatmanInputType) {
  const multilineConfig = {
    height: isMultiline && { height: 152 },
    numberofLines: isMultiline ? 4 : undefined,
    textAlign: isMultiline ? ("top" as "top") : ("auto" as "auto"),
  };

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, multilineConfig.height]}
        numberOfLines={multilineConfig.numberofLines}
        textAlignVertical={multilineConfig.textAlign}
        multiline={isMultiline}
        placeholder={description}
        placeholderTextColor={"#0f0f0f"}
        inputMode={contentType}
      />
    </>
  );
}
