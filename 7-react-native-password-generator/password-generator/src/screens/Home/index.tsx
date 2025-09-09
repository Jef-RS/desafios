import { View, Text, Alert, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import Banner from "../../components/Banner";
import BatButton from "../../components/BatButton";
import BatPasswordArea from "../../components/BatPasswordArea";
import { generatePasswordToken } from "../../services/generatePasswordService";
import { setStringAsync } from "expo-clipboard";
import BatLengthArea from "../../components/BatLengthArea";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const [password, setPassword] = useState(
    "Your password will be displayed here!"
  );
  const [length, setLength] = useState(8);

  function generatePassword() {
    const passwordGenerated = generatePasswordToken(length);

    setPassword(passwordGenerated);
  }

  function copyToClipboard() {
    setStringAsync(password);
    ToastAndroid.show("Password copied successfully! 🚀", ToastAndroid.SHORT);
  }

  function selectPasswordLength(type: string) {
    if (type === "increase") {
      setLength((prev) => prev + 1);
    } else if (type === "decrement") {
      setLength((prev) => prev - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Banner />
      </View>

      <View style={styles.passwordAreaContainer}>
        <BatPasswordArea passwordValue={password} />

        <BatLengthArea changeLength={selectPasswordLength} length={length} />

        <View style={styles.button}>
          <BatButton generate={generatePassword} title="🎲 Generate Password" />
          <BatButton copy={copyToClipboard} title="📋 Copy Password" />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
