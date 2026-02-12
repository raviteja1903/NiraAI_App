import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useCart } from "../context/CartContext";
 

export default function Header() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { cartCount } = useCart();

  const logoWidth = width * 0.22;
  const logoHeight = Math.min(width * 0.30, 55);

  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../../assets/images/nira-appLOGO.png")}
          resizeMode="cover"
          style={{
            width: logoWidth,
            height: logoHeight,
          }}
        />

        {/* Icons */}
        <View style={styles.icons}>
          {/* Search */}
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="search-outline" size={22} color="#000" />
          </TouchableOpacity>

          {/* Wishlist */}
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="heart-outline" size={22} color="#000" />
          </TouchableOpacity>

          {/* Cart */}
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.push("/cart")}
          >
            <View>
              <Ionicons name="cart-outline" size={22} color="#000" />

              {cartCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {cartCount > 99 ? "99+" : cartCount}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#FFFFFF",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
  },

  icons: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBtn: {
    marginLeft: 14,
    padding: 6,
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -8,
    backgroundColor: "#FF5A3C",
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "#FFF",
    elevation: 3,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});
