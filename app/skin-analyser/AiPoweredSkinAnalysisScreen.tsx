import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function AiPoweredSkinAnalysisScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={styles.heading}>AI Powered</Text>
        <Text style={styles.subHeading}>Skin Analysis</Text>

        <View style={styles.bullets}>
          <Text style={styles.bullet}>• 15 years of skin research.</Text>
          <Text style={styles.bullet}>
            • Matches dermatologist accuracy 95% of the time.
          </Text>
          <Text style={styles.bullet}>
            • A skin strength database with 10,000 graded pictures.
          </Text>
          <Text style={styles.bullet}>
            • Powered by Artificial Intelligence.
          </Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
          }}
          style={styles.phoneImage}
        />

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>See How It Works</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.headingCenter}>
          How to take your picture{"\n"}for skin analysis?
        </Text>

        <StepCard
          step="1"
          title="Take a natural picture"
          desc="Remove make-up. Take-off your glasses. Pull your hair back & tie it."
          image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
        />

        <StepCard
          step="2"
          title="Ensure it's a well-lit face"
          desc="Enhance the accuracy of results by clicking the picture in natural light or a well-lit space."
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        />

        <StepCard
          step="3"
          title="Stay straight & centered"
          desc="Make sure your face is fully visible and centered in the frame."
          image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        />
      </View>
    </ScrollView>
  );
}

 
function StepCard({ step, title, desc, image }: any) {
  return (
    <View style={styles.stepCard}>
      <View style={styles.stepRow}>
        <Text style={styles.stepNumber}>{step}</Text>
        <Image source={{ uri: image }} style={styles.stepImage} />
      </View>

      <Text style={styles.stepTitle}>{title}</Text>
      <Text style={styles.stepDesc}>{desc}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  section: {
    backgroundColor: "#FFF",
    padding: 20,
    marginBottom: 16,
  },

  heading: {
    fontSize: 30,
    fontWeight: "800",
    color: "#000",
  },

  subHeading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },

  headingCenter: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
  },

  bullets: {
    marginBottom: 20,
  },

  bullet: {
    fontSize: 15,
    color: "#333",
    marginBottom: 8,
    lineHeight: 22,
  },

  phoneImage: {
    width: width - 40,
    height: 360,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20,
  },

  primaryButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  stepCard: {
    marginBottom: 30,
  },

  stepRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  stepNumber: {
    fontSize: 80,
    fontWeight: "800",
    color: "#E0E0E0",
    marginRight: -20,
  },

  stepImage: {
    width: width - 80,
    height: 260,
    borderRadius: 12,
    resizeMode: "cover",
  },

  stepTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 16,
  },

  stepDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    lineHeight: 20,
  },
});
