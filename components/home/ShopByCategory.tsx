import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    id: "1",
    title: "Skin Care",
    image:
      "https://adewunmi.ca/cdn/shop/articles/Skincare_Without_Hyaluronic_Acid_1200x1200.png?v=1692246940&quot",
  },
  {
    id: "2",
    title: "Lip Care",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.Ne1MJzpFhSXAXoIpA8LCBwHaEK?pid=Api&P=0&h=220",
  },
  {
    id: "3",
    title: "Eye Care",
    image:
      "https://c8.alamy.com/comp/GJY0PE/eye-test-vision-chart-blurred-effect-GJY0PE.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            style={styles.item}
          >
            {/* CIRCLE IMAGE */}
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.circle}
              imageStyle={styles.circleImage}
            >
              <View style={styles.overlay} />
              <Text style={styles.circleText}>{item.title}</Text>
            </ImageBackground>

            {/* LABEL BELOW */}
            <Text style={styles.label}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const CIRCLE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 10,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#222",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    alignItems: "center",
    width: "32%",
  },

  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  circleImage: {
    borderRadius: CIRCLE_SIZE / 2,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  circleText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    zIndex: 1,
    paddingHorizontal: 6,
  },

  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
    textAlign: "center",
  },
});
