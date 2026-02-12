import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import { Stack, useRouter } from "expo-router";
import React from "react";

import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AdvancedSkinAnalysisScreen from "./AdvancedSkinAnalysisScreen";
import AiPoweredSkinAnalysisScreen from "./AiPoweredSkinAnalysisScreen";
import HowAIWorksScreen from "./HowAIWorksScreen";

const { width } = Dimensions.get("window");
const router = useRouter();

export default function SkinInsightsScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.safe}>
        <Header />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.container}>
            <Text style={styles.title}>SkinInsights</Text>
            <Text style={styles.subtitle}>
              Understand your skin{"\n"}better with AI.
            </Text>

            <View style={styles.imageWrapper}>
              <Image
                source={require("../../assets/images/Skin_Insights.webp")}
                style={styles.faceImage}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.button}
              onPress={() => router.push("/skin-analysisCare")}  
            >
              <Text style={styles.buttonText}>Start Now</Text>
            </TouchableOpacity>
          </View>

          <HowAIWorksScreen />
          <AdvancedSkinAnalysisScreen />
          <AiPoweredSkinAnalysisScreen />
        </ScrollView>
      </SafeAreaView>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 30,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },

  imageWrapper: {
    width,
    height: width,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  faceImage: {
    width: width * 0.85,
    height: width * 0.95,
    borderRadius: width,
  },

  button: {
    marginTop: 30,
    width: width * 0.8,
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
