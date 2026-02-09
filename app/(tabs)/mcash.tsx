import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BitcoinGraphScreen from "../BitCoin/BitcoinGraphScreen";

type TabType = "tokens" | "staking" | "transactions";

export default function BitcoinRewardsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("tokens");

  return (
    <>
      <Header />

      <SafeAreaView style={styles.safe}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* WALLET CARD */}
          <View style={styles.walletCard}>
            <Image
              source={require("../../assets/images/BitcoinlogoIMG.png")}
              style={styles.bitcoinIcon}
            />

            <Text style={styles.balance}>0.00234 Alphie</Text>
            <Text style={styles.inr}>≈ ₹9,850</Text>

            {/* RECEIVE / SEND */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="arrow-down" size={18} color="#F7C948" />
                <Text style={styles.actionText}>Receive</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="arrow-up" size={18} color="#F7C948" />
                <Text style={styles.actionText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TABS */}
          <View style={styles.tabsRow}>
            {[
              { key: "tokens", label: "Tokens" },
              { key: "staking", label: "Staking" },
              { key: "transactions", label: "Transactions" },
            ].map((tab) => (
              <TouchableOpacity
                key={tab.key}
                style={styles.tabItem}
                onPress={() => setActiveTab(tab.key as TabType)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab.key && styles.activeTabText,
                  ]}
                >
                  {tab.label}
                </Text>

                {activeTab === tab.key && (
                  <View style={styles.activeUnderline} />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* TAB CONTENT */}
          {activeTab === "tokens" && (
            <Text style={styles.emptyText}>No tokens available</Text>
          )}

          {activeTab === "staking" && (
            <Text style={styles.emptyText}>Staking coming soon 🚀</Text>
          )}

          {activeTab === "transactions" && (
            <Text style={styles.emptyText}>No transactions yet</Text>
          )}

          {/* GRAPH */}
          <BitcoinGraphScreen />
        </ScrollView>
      </SafeAreaView>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  /* SCREEN */
  safe: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  scrollContent: {
    padding: 14,
    paddingBottom: 90,
  },

  /* WALLET CARD */
  walletCard: {
    backgroundColor: "#000000", // 🖤 black
    borderRadius: 20,
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },

  bitcoinIcon: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },

  balance: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF", // ✅ white text for black bg
    marginTop: 6,
  },

  inr: {
    fontSize: 14,
    color: "#B5B5B5", // ✅ soft gray
    marginBottom: 18,
  },

  /* ACTION BUTTONS */
  actionRow: {
    flexDirection: "row",
    gap: 14,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#F7C948", // 🟡 yellow
    backgroundColor: "rgba(247,201,72,0.12)", // subtle yellow tint
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 14,
  },

  actionText: {
    color: "#F7C948", // 🟡 yellow text
    fontWeight: "700",
    marginLeft: 8,
  },

  /* TABS */
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 22,
  },

  tabItem: {
    alignItems: "center",
  },

  tabText: {
    fontSize: 14,
    color: "#999",
    fontWeight: "600",
  },

  activeTabText: {
    color: "black",
  },

  activeUnderline: {
    width: 26,
    height: 3,
    borderRadius: 2,
    backgroundColor: "black",
    marginTop: 6,
  },

  /* EMPTY TEXT */
  emptyText: {
    textAlign: "center",
    color: "#777",
    marginVertical: 16,
    fontSize: 13,
  },
});
