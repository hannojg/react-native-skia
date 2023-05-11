import React from "react";
import { ScrollView } from "react-native";

import { HomeScreenButton } from "./HomeScreenButton";

export const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeScreenButton
        title="▶️ Skottie"
        description="Skottie implementation"
        route="Skottie"
        testId="Skottie"
      />
      <HomeScreenButton
        title="▶️ Lottie"
        description="Lottie implementation"
        route="Lottie"
        testId="Lottie"
      />
    </ScrollView>
  );
};
