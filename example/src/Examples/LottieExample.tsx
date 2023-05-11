import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react-native";

export const LottieExample = () => {
  const ref = useRef<Lottie>(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current?.play();
    }, 1000);
  }, []);

  return (
    <Lottie
      ref={ref}
      source={require("../assets/Hands.json")}
      autoPlay={true}
      loop={true}
      resizeMode="center"
    />
  );
};
