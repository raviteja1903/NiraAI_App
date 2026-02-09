import BottomNav from "@/components/home/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <>
      <SafeAreaView style={styles.safe}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/previews/036/475/917/original/agent-or-spy-icon-incognito-logo-vector.jpg",
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
        </View>

        <View style={styles.balanceBox}>
          <Image
            source={require("../../assets/images/BitcoinlogoIMG.png")}
            style={styles.bitcoinIcon}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.balanceLabel}>Alphie Rewards</Text>
            <Text style={styles.balanceValue}>0.00568 BTC</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.options}>
          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="settings-outline" size={20} color="#000" />
            <Text style={styles.optionText}>Settings</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="wallet-outline" size={20} color="#000" />
            <Text style={styles.optionText}>Wallet & Rewards</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#999" />
          </TouchableOpacity>

          {/* 🆕 ENCRYPTION */}
          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <Text style={styles.optionText}>Encryption</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#999" />
          </TouchableOpacity>

          {/* 🆕 REFER A FRIEND */}
          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="people-outline" size={20} color="#000" />
            <Text style={styles.optionText}>Refer a Friend</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionBtn}
            onPress={() =>
              router.push("/doctor-consultation/appointmenthistory")
            }
          >
            <Ionicons name="time-outline" size={20} color="#000" />
            <Text style={styles.optionText}>Appointment History</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.optionText}>Help & Support</Text>
            <Ionicons name="chevron-forward-outline" size={18} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Ionicons name="log-out-outline" size={20} color="#E91E63" />
            <Text style={[styles.optionText, { color: "#E91E63" }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  header: {
    alignItems: "center",
    marginBottom: 18,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 24,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
  },
bitcoinIcon: {
  width: 50,
  height: 50,
  resizeMode: "contain",
},

  name: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
  },

  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  balanceBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
  },

  balanceLabel: {
    fontSize: 14,
    color: "#666",
  },

  balanceValue: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 2,
  },

  editBtn: {
    backgroundColor: "#E91E63",
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: "center",
    marginBottom: 24,
  },

  editText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  options: {
    marginTop: 8,
  },

  optionBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  optionText: {
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
});
