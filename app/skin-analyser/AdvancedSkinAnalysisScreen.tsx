import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

export default function AdvancedSkinAnalysisScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      
      <Text style={styles.mainTitle}>
        Advanced &{"\n"}Accurate Skin{"\n"}Analysis
      </Text>

      <Text style={styles.subTitle}>3-step analysis</Text>

      <Text style={styles.description}>
        Unlock your skin's true potential with our diagnostic process: Assess,
        Capture & Get Routine.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Now</Text>
      </TouchableOpacity>

      
      <View style={styles.stepCard}>
        <Image
          source={require("../../assets/images/step1.avif")}
          style={styles.stepImage}
        />
        <View style={styles.stepContent}>
          <Text style={styles.stepLabel}>STEP 1</Text>
          <Text style={styles.stepTitle}>Take a short Assessment</Text>
          <Text style={styles.stepDesc}>
            To understand your skin type, age, concerns and goals.
          </Text>
        </View>
      </View>

     
      <View style={styles.stepCard}>
        <Image
          source={require("../../assets/images/step2.avif")}
          style={styles.stepImage}
        />
        <View style={styles.stepContent}>
          <Text style={styles.stepLabel}>STEP 2</Text>
          <Text style={styles.stepTitle}>AI Skin Scan</Text>
          <Text style={styles.stepDesc}>
            To let our AI analyze your skin in detail for more accurate results.
          </Text>
        </View>
      </View>

      
      <View style={styles.stepCard}>
        <Image
          source={require("../../assets/images/step3.avif")}
          style={styles.stepImage}
        />
        <View style={styles.stepContent}>
          <Text style={styles.stepLabel}>STEP 3</Text>
          <Text style={styles.stepTitle}>Get Your Routine</Text>
          <Text style={styles.stepDesc}>
            Get your personalized skincare routine tailored to your unique
            needs.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  mainTitle: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    color: "#000",
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#000",
  },

  description: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 30,
    lineHeight: 22,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#000",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 4,
    marginBottom: 40,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  stepCard: {
    width,
    marginBottom: 30,
  },

  stepImage: {
    width,
    height: 260,
    resizeMode: "cover",
  },

  stepContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  stepLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 6,
  },

  stepTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#000",
  },

  stepDesc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
