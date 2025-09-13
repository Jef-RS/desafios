import React, { useState } from "react";
import Signal from "../Signal";
import Form from "../Form";

export default function Home() {
  const [opacityChange, setOpacityChange] = useState<number>(1);
  const isScreenChanged = opacityChange === 0;

  function handleBatSignal() {
    setOpacityChange(0);
  }

  return (
    <>
      {isScreenChanged ? (
        <Form />
      ) : (
        <Signal
          screenOptions={{
            opacity: opacityChange,
            action: handleBatSignal,
          }}
        />
      )}
    </>
  );
}
