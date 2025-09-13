import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import BatmanInput from "../../components/BatmanTextInput";
import BatmanIcon from "../../components/BatmanIcon";
import BatmanButton from "../../components/BatmanButton";

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BatmanIcon size={52} opacity={1} />
      </View>
      <BatmanInput label="Name" description="Your name" contentType="text" />
      <BatmanInput
        label="Phone"
        description="Phone number here"
        contentType="tel"
      />
      <BatmanInput
        label="Localization"
        description="Yout localization here. Exemple: 41.4xxx8, 2.xxx03."
        contentType="text"
      />
      <BatmanInput
        label="Observations"
        description="Add more details here if necessary."
        contentType="text"
        isMultiline={true}
      />
      <View style={{ marginTop: 52 }}>
        <BatmanButton title="Send" opacity={1} />
      </View>
    </View>
  );
}
