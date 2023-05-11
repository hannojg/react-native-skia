import {
  Skia,
  SkiaView,
  useDrawCallback,
  useSharedValueEffect,
} from "@shopify/react-native-skia";
import { useEffect, useMemo, useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import HandsLottie from "../assets/Hands.json";
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const SkottieExample = () => {
  const skottie = useMemo(() => Skia.Skottie(JSON.stringify(HandsLottie)), []);

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: skottie.duration * 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  }, []);

  const onDraw = useDrawCallback((canvas, info) => {
    skottie.seek(progress.value);
    const rect = Skia.XYWHRect(0, 0, info.width, info.height);
    skottie.render(canvas, rect);
  });

  return (
    <SafeAreaView style={styles.flex1}>
      <SkiaView style={styles.flex1} onDraw={onDraw} mode="continuous" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
