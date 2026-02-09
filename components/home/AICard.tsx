import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AICard() {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>AI Skin Analysis</Text>
        <Text style={styles.desc}>
          Quickly analyze your skin, receive personalized skincare insights.
        </Text>

        {/* BUTTON WITH ROUTE */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/skin-analyser/skin-analyser")}
          activeOpacity={0.85}
        >
          <Ionicons name="sparkles" size={14} color="#000" />
          <Text style={styles.btnText}>Analyze Skin</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/images/SkinAI.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  desc: {
    fontSize: 12,
    color: "#6F6F6F",
    marginVertical: 6,
    lineHeight: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFB366",
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    gap: 6,
    marginTop: 4,
  },
  btnText: {
    fontSize: 12,
    fontWeight: "500",
  },
  image: {
    width: 95,
    height: 125,
    borderRadius: 16,
    marginLeft: 10,
    resizeMode: "contain",
  },
});