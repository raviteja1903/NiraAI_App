import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

 

const history = [
  {
    id: "1",
    title: "Order #1024",
    type: "Reward Earned",
    btc: "+0.00012 BTC",
    date: "12 Sep 2026",
    status: "credit",
   
  },
  {
    id: "2",
    title: "Order #1021",
    type: "Reward Earned",
    btc: "+0.00008 BTC",
    date: "10 Sep 2026",
    status: "credit",
  },
  {
    id: "3",
    title: "Withdrawal",
    type: "BTC Withdrawn",
    btc: "-0.00020 BTC",
    date: "08 Sep 2026",
    status: "debit",
  },
];

export default function BitcoinHistoryScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="time-outline" size={22} color="#000" />
          <Text style={styles.headerTitle}>Alphiecoin History</Text>
        </View>

        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <View
                style={[
                  styles.iconCircle,
                  {
                    backgroundColor:
                      item.status === "credit" ? "#E8F8F2" : "#FDECEC",
                  },
                ]}
              >
                <Ionicons
                  name={
                    item.status === "credit"
                      ? "arrow-down-outline"
                      : "arrow-up-outline"
                  }
                  size={18}
                  color={item.status === "credit" ? "#2ECC71" : "#E74C3C"}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.type}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>

              <Text
                style={[
                  styles.btc,
                  { color: item.status === "credit" ? "#2ECC71" : "#E74C3C" },
                ]}
              >
                {item.btc}
              </Text>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.supportBtn}
          onPress={() => router.push("/BitCoin/ConsumerCareSupport")}
        >
          <Image
            source={require("../../assets/images/consumerCare.png")}
            style={styles.supportImage}
          />
          
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F6FA",
    padding: 14,
    position: "relative",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
    color: "#000",
  },
  supportImage: {
    width: 70,
    height: 60,
    resizeMode: "contain",
    borderRadius: 17,
  },

  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
  },

  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  subTitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },

  date: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },

  btc: {
    fontSize: 14,
    fontWeight: "700",
  },

  /* SUPPORT BUTTON */
  supportBtn: {
    position: "absolute",
    bottom: 1,
    right: 14,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
});
