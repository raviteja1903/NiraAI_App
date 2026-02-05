import { LinearGradient } from "expo-linear-gradient";
import { VideoView, useVideoPlayer } from "expo-video";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import HydrationCard from "./HydrationCard";

const { width } = Dimensions.get("window");

export default function HydrationVideoSection() {
  const player = useVideoPlayer(require("../assets/Video.mp4"), (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const translateX = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (!contentWidth) return;

    translateX.setValue(0);

    animationRef.current = Animated.loop(
      Animated.timing(translateX, {
        toValue: -contentWidth,
        duration: contentWidth * 15,
        useNativeDriver: true,
      }),
    );

    animationRef.current.start();

    return () => {
      animationRef.current?.stop();
    };
  }, [contentWidth, translateX]);

  return (
    <>
      <View style={styles.container}>
        <Header />

        <ScrollView>
          <View style={styles.wrapper}>
            <VideoView
              player={player}
              style={styles.video}
              contentFit="cover"
              nativeControls={false}
              allowsFullscreen={false}
              allowsPictureInPicture={false}
              pointerEvents="none"
            />

            <View style={styles.ledGlow} />

            <LinearGradient
              colors={[
                "rgba(0,0,0,0.25)",
                "rgba(0,0,0,0.55)",
                "rgba(0,0,0,0.25)",
              ]}
              style={styles.overlay}
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.marqueeMask}>
              <Animated.View
                style={[styles.marqueeRow, { transform: [{ translateX }] }]}
              >
                <View
                  style={styles.marqueeContent}
                  onLayout={(e) => setContentWidth(e.nativeEvent.layout.width)}
                >
                  <Text style={styles.glowText}>
                    HYDRATION MEETS BEAUTY BENEFITS
                  </Text>
                  <Text style={styles.glowText}> • 🤍 </Text>
                  <Text style={styles.glowText}>
                    HYDRATION BUILT FOR STRONGER SKIN
                  </Text>
                  <Text style={styles.glowText}> • ♡ </Text>
                  <Text style={styles.glowText}>
                    SCIENCE-BACKED SKIN HYDRATION
                  </Text>
                  <Text style={styles.glowText}> • 🤍 </Text>
                </View>

                <View style={styles.marqueeContent}>
                  <Text style={styles.glowText}>
                    HYDRATION MEETS BEAUTY BENEFITS
                  </Text>
                  <Text style={styles.glowText}> • 🤍 </Text>
                  <Text style={styles.glowText}>
                    HYDRATION BUILT FOR STRONGER SKIN
                  </Text>
                  <Text style={styles.glowText}> • ♡ </Text>
                  <Text style={styles.glowText}>
                    SCIENCE-BACKED SKIN HYDRATION
                  </Text>
                  <Text style={styles.glowText}> • 🤍 </Text>
                </View>
              </Animated.View>
            </View>
          </View>

          <HydrationCard />
        </ScrollView>
      </View>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  wrapper: {
    width,
    height: width * 0.6,
    backgroundColor: "#000",
    overflow: "hidden",
  },

  video: {
    ...StyleSheet.absoluteFillObject,
    transform: [{ scale: 1.05 }],
  },

  ledGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,111,177,0.18)",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  textContainer: {
    marginTop: 3,
    backgroundColor: "#FF6FB1",
    paddingVertical: 8,
  },

  marqueeMask: {
    width: "100%",
    overflow: "hidden",
  },

  marqueeRow: {
    flexDirection: "row",
  },

  marqueeContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  glowText: {
    fontSize: 15,
    fontWeight: "900",
    color: "#FEF9FB",
    letterSpacing: 1.5,
  },
});
