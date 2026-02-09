import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const { width } = useWindowDimensions();

  const logoWidth = width * 0.22;
  const logoHeight = Math.min(width * 0.29, 55);  

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        {/* LOGO ONLY GROWS (HEIGHT CAPPED) */}
        <Image
          source={require("../../assets/images/nira-appLOGO.png")}
          resizeMode="cover"
          style={{
            width: logoWidth,
            height: logoHeight,
          }}
        />

        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="search-outline" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="heart-outline" size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="cart-outline" size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { backgroundColor: "#FFF" },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 16,
    paddingVertical: 1, 
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
  },

  icons: {
    flexDirection: "row",
  },

  iconBtn: {
    marginLeft: 12,
    padding: 6,
  },
});
