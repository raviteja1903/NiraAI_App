import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";

import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

       
        <ImageBackground
          source={require("../../assets/images/image.png")}
          style={styles.image}
        >
       
          <LinearGradient
            colors={["rgba(0,0,0,0.0)", "rgba(0,0,0,0.75)"]}
            style={styles.overlay}
          />

    
          <View style={styles.content}>
           
            <Text style={styles.title}>Personalized</Text>

            {/* AI Powered Row */}
            <View style={styles.aiRow}>
              {/* <Image
                source={require("../../assets/images/eye.png")}
                style={styles.eyeIcon}
              /> */}
              <Text style={styles.aiText}>AI-Powered</Text>
            </View>
 
            <Text style={styles.subtitle}>Skincare Journey</Text>

            <BlurView
              intensity={40}
              tint="light"
              style={styles.blurButtonWrapper}
            >
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => router.replace("/(tabs)/home")}
                style={styles.blurButton}
              >
                {/* Text */}
                <Text style={styles.getStartedText}>Get Started</Text>

                {/* Right Arrow */}
                <View style={styles.rightIcon}>
                  <Text style={styles.rightArrow}>›</Text>
                </View>
              </TouchableOpacity>
            </BlurView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
 
  title: {
    fontSize: 28,
    fontWeight: "400",
    color: "#FFFFFF",
    marginBottom: 6,
  },

  aiRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },

  eyeIcon: {
    width: 26,
    height: 16,
    resizeMode: "contain",
  },

  aiText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 28,
    fontWeight: "400",
    color: "#FFFFFF",
    marginBottom: 28,
  },

  blurButtonWrapper: {
    width: "100%",
    marginTop: 12,
    borderRadius: 32,
    overflow: "hidden",
  },

  blurButton: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  getStartedText: {
    fontSize: 17,
    fontWeight: "900",
    color: "#FAF4F4",
  },

  rightIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  rightArrow: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
