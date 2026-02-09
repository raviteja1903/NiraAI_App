import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ConsumerSupport = () => {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Ionicons name="help-circle-outline" size={36} color="#4F46E5" />
          <Text style={styles.headerTitle}>Consumer Support</Text>
          <Text style={styles.headerSub}>We’re here to help you 24/7</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => router.push("/BitCoin/live-chat")}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={28}
            color="#10B981"
          />

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Live Chat</Text>
            <Text style={styles.cardDesc}>
              Chat instantly with our support team
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.card}>
          <Ionicons name="call-outline" size={28} color="#3B82F6" />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Call Support</Text>
            <Text style={styles.cardDesc}>
              Speak directly with an executive
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="mail-outline" size={28} color="#F59E0B" />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>Email Us</Text>
            <Text style={styles.cardDesc}>support@nira-ai.co.in</Text>
          </View>
        </View>

        {/* FAQ */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        <TouchableOpacity style={styles.faq}>
          <Text style={styles.faqText}>How do I reset my password?</Text>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.faq}>
          <Text style={styles.faqText}>How can I contact customer care?</Text>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.faq}>
          <Text style={styles.faqText}>Is my data secure?</Text>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
      </ScrollView>
      <BottomNav />
    </>
  );
};

export default ConsumerSupport;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9FAFB",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 8,
    color: "#111827",
  },

  headerSub: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  cardText: {
    marginLeft: 14,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 20,
    color: "#111827",
  },

  faq: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },

  faqText: {
    fontSize: 15,
    color: "#374151",
  },
});
