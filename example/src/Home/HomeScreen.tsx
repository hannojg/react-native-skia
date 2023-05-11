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
    </ScrollView>
  );
};
