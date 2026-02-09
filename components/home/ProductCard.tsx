import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

type Props = {
  id: string;
  title: string;
  desc: string;
  image: string;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
};

export default function ProductCard({
  id,
  title,
  desc,
  image,
  isWishlisted,
  onToggleWishlist,
}: Props) {
  return (
    <View style={styles.card}>
      {/* Wishlist Heart Icon */}
      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => onToggleWishlist(id)}
        activeOpacity={0.7}
      >
        <Text style={styles.heartIcon}>{isWishlisted ? "❤️" : "🤍"}</Text>
      </TouchableOpacity>

      {/* Image */}
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.desc}>{desc}</Text>

        <Text style={styles.who}>
          <Text style={styles.bold}>Who is it for:</Text> Suitable for all skin
          types, 16+ years old.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 100,
    position: "relative",
  },

  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  heartIcon: {
    fontSize: 20,
  },

  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
  },

  desc: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },

  who: {
    fontSize: 13,
    color: "#444",
    marginBottom: 16,
  },

  bold: {
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#FFD6CC",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FF5A3C",
    fontWeight: "600",
    fontSize: 15,
  },
});