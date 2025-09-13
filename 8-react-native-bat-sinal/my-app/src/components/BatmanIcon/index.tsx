//@ts-ignore
import Batman from "../../../assets/batman.png";
import { Image } from "react-native";
import React from "react";

type BatmanIconType = {
  size: number;
  opacity: number;
};

export default function BatmanIcon({ size, opacity }: BatmanIconType) {
  const iconSize = { width: size, height: size, opacity: opacity };

  return (
    <>
      <Image style={iconSize} source={Batman} />
    </>
  );
}
