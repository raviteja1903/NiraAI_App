import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter, Href } from "expo-router";

type Category = {
  id: string;
  title: string;
  image: string;
  route: Href;
};

const categories: Category[] = [
  {
    id: "1",
    title: "Skin Care",
    route: "/skin-care",
    image:
      "https://edwardscosmeceuticals.com.au/wp-content/uploads/2022/09/23Body-copy-page-images-for-product-pages.jpg",
  },
  {
    id: "2",
    title: "Lip Care",
    route: "/lip-care",
    image:
      "https://www.puresmile.com.au/wp-content/uploads/2023/06/lip-care-1024x536.jpeg",
  },
  {
    id: "3",
    title: "Eye Care",
    route: "/eye-care",
    image:
      "https://tse4.mm.bing.net/th/id/OIP._WNnuA4oI5QToAUvv7Wz3gHaE8?pid=Api",
  },
];

export default function ShopByCategory() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            style={styles.item}
            onPress={() => router.push(item.route)}
          >
            {/* Circle Image */}
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.circle}
              imageStyle={styles.circleImage}
            >
              <View style={styles.overlay} />
            </ImageBackground>

            {/* Label */}
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
    overflow: "hidden",
  },

  circleImage: {
    borderRadius: CIRCLE_SIZE / 2,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "#444",
    textAlign: "center",
  },
});
