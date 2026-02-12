import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

type Props = {
  title: string;
  desc: string;
  image: string;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  cartQuantity: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
};

export default function ProductCard({
  title,
  desc,
  image,
  isWishlisted,
  onToggleWishlist,
  cartQuantity,
  onAddToCart,
  onRemoveFromCart,
}: Props) {
  return (
    <View style={styles.card}>
      {/* Wishlist Heart */}
      <TouchableOpacity
        style={styles.heartButton}
        onPress={onToggleWishlist}
        activeOpacity={0.7}
      >
        <Text style={styles.heartIcon}>
          {isWishlisted ? "❤️" : "🤍"}
        </Text>
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
          <Text style={styles.bold}>Who is it for:</Text>{" "}
          Suitable for all skin types, 16+ years old.
        </Text>

        {/* Cart Controls */}
        {cartQuantity === 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={onAddToCart}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={onRemoveFromCart}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>
              {cartQuantity}
            </Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={onAddToCart}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
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
  },

  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },

  heartIcon: {
    fontSize: 20,
  },

  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#F9F9F9",
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
    backgroundColor: "#111111",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    paddingVertical: 8,
  },

  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  quantityText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
    marginHorizontal: 24,
    minWidth: 30,
    textAlign: "center",
  },
});
