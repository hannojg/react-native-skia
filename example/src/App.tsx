import type { LinkingOptions } from "@react-navigation/native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import type { HeaderBackButtonProps } from "@react-navigation/elements";
import { HeaderBackButton } from "@react-navigation/elements";
import { FiberProvider } from "its-fine";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  AnimationExample,
  ReanimatedExample,
  API,
  Aurora,
  Breathe,
  Filters,
  Gooey,
  GraphsScreen,
  Hue,
  Matrix,
  Glassmorphism,
  Neumorphism,
  PerformanceDrawingTest,
  Wallpaper,
  Vertices,
  Wallet,
  Severance,
} from "./Examples";
import { CI, Tests } from "./Tests";
import { HomeScreen } from "./Home";
import type { StackParamList } from "./types";
import { useAssets } from "./Tests/useAssets";
import { SkottieExample } from "./Examples/SkottieExample";

const linking: LinkingOptions<StackParamList> = {
  config: {
    screens: {
      Home: "",
      Skottie: "skottie",
      Vertices: "vertices",
      API: "api",
      Breathe: "breathe",
      Filters: "filters",
      Gooey: "gooey",
      Hue: "hue",
      Matrix: "matrix",
      Severance: "severance",
      Aurora: "aurora",
      Glassmorphism: "glassmorphism",
      Neumorphism: "neumorphism",
      Wallpaper: "wallpaper",
      Wallet: "wallet",
      Graphs: "graphs",
      Animation: "animation",
      Reanimated: "reanimated",
      Performance: "performance",
      Tests: "test",
    },
  },
  prefixes: ["rnskia://"],
};

const HeaderLeft = (props: HeaderBackButtonProps) => {
  const navigation = useNavigation();
  return (
    <HeaderBackButton
      {...props}
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }}
      testID="back"
    />
  );
};

const App = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  const assets = useAssets();
  if (assets === null) {
    return null;
  }
  return (
    <FiberProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar hidden />
        <NavigationContainer linking={linking}>
          <Stack.Navigator
            screenOptions={{
              headerLeft: HeaderLeft,
            }}
            initialRouteName={CI ? "Tests" : "Home"}
          >
            <Stack.Screen
              name="Home"
              key="Home"
              component={HomeScreen}
              options={{
                title: "🎨 Skia",
              }}
            />
            <Stack.Screen
              key="Tests"
              name="Tests"
              options={{
                title: "🔧 Tests",
              }}
            >
              {(props) => <Tests {...props} assets={assets} />}
            </Stack.Screen>
            <Stack.Screen
              name="Vertices"
              component={Vertices}
              options={{
                header: () => null,
              }}
            />

            <Stack.Screen name="Skottie" component={SkottieExample} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </FiberProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
