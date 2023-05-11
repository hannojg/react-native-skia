import {
  Easing,
  Skia,
  SkiaView,
  useDrawCallback,
  useTiming,
} from "@shopify/react-native-skia";
import { useEffect, useMemo, useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import HandsLottie from "../assets/Hands.json";

export const SkottieExample = () => {
  const skottie = useMemo(() => Skia.Skottie(JSON.stringify(HandsLottie)), []);

  const progress = useTiming(
    {
      from: 0,
      to: 1,
      loop: true,
    },
    {
      duration: skottie.duration * 1000,
      easing: Easing.linear,
    }
  );

  const onDraw = useDrawCallback((canvas, info) => {
    skottie.seek(progress.current);
    const rect = Skia.XYWHRect(0, 0, info.width, info.height);
    skottie.render(canvas, rect);
  });

  const skRef = useRef<SkiaView>(null);
  useEffect(() => {
    skRef.current?.registerValues([progress]);
  }, [progress]);

  return (
    <SafeAreaView style={styles.flex1}>
      <SkiaView ref={skRef} style={styles.flex1} onDraw={onDraw} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
