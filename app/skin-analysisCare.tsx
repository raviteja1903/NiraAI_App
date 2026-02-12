import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function SkinAnalysisScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          How to take your picture for skin analysis?
        </Text>

        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Take a natural picture
          </Text>
          <Text style={styles.cardDesc}>
            Remove make-up. Take-off your glasses.
            Pull your hair back & tie it.
          </Text>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Ensure it's a well-lit face
          </Text>
          <Text style={styles.cardDesc}>
            Click the picture in natural light or
            well-lit space.
          </Text>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Align your face
          </Text>
          <Text style={styles.cardDesc}>
            Place your face inside the outline.
          </Text>
        </View>

        <Text style={styles.terms}>
          By clicking "Proceed", you agree to
          terms & conditions and consent to
          image processing.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/camera-screen")}
        >
          <Text style={styles.buttonText}>
            Proceed
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a4a4a",
    padding: 20,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#5a5a5a",
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardDesc: {
    color: "#ddd",
    fontSize: 14,
  },
  terms: {
    color: "#ccc",
    fontSize: 12,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
