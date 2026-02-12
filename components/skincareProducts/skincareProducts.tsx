import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../context/CartContext";

const { width } = Dimensions.get("window");

type Product = {
  id: number;
  category: string;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
};

const products: Product[] = [
  {
    id: 1,
    category: "Acne",
    image: "https://www.nira-ai.co.in/assets/niacinamide_10_serum.png",
    title: "Salicylic Acid + LHA 2% Cleanser",
    subtitle: "Acne, Breakouts & Oiliness",
    price: 284,
    oldPrice: 299,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    category: "Sun Protection",
    image: "https://www.nira-ai.co.in/assets/spf60_sunscreen.png",
    title: "SPF 50 Sunscreen",
    subtitle: "Sun protection, UV exposure / damage",
    price: 379,
    oldPrice: 399,
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    category: "Hydration",
    image: "	https://www.nira-ai.co.in/assets/aha_pha_bha_peel.png   ",
    title: "Vitamin C Serum",
    subtitle: "Brightening & Glow",
    price: 499,
    oldPrice: 549,
    rating: 4.7,
    reviews: 180,
  },
  {
    id: 4,
    category: "Repair",
    image: "https://www.nira-ai.co.in/assets/zinc_serum.png",
    title: "Night Repair Cream",
    subtitle: "Skin Barrier Strengthening",
    price: 599,
    oldPrice: 699,
    rating: 4.9,
    reviews: 312,
  },
];

type ProductCardProps = {
  item: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const scaleAnim = useState(new Animated.Value(1))[0];
  const { addToCart, removeFromCart, cartItems } = useCart();

  const quantity = cartItems.find((i) => i.id === item.id)?.quantity || 0;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const discount = Math.round(
    ((item.oldPrice - item.price) / item.oldPrice) * 100,
  );

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{item.category}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => setIsLiked(!isLiked)}
        >
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={22}
            color={isLiked ? "#ff4757" : "#000"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={14} color="#FFD700" />
        <Text style={styles.ratingText}>{item.rating}</Text>
        <Text style={styles.reviewsText}>({item.reviews})</Text>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>

      <Text style={styles.subtitle} numberOfLines={1}>
        {item.subtitle}
      </Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>₹{item.price}</Text>
        <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}% OFF</Text>
        </View>
      </View>

      {quantity === 0 ? (
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() =>
            addToCart({
              id: item.id,
              title: item.title,
              price: item.price,
              image: item.image,
            })
          }
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Ionicons name="cart-outline" size={18} color="#fff" />
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => removeFromCart(item.id)}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtyNumber}>{quantity}</Text>

          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() =>
              addToCart({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
              })
            }
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </Animated.View>
  );
};

export default function BestSellersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Our Best Sellers</Text>
        <Text style={styles.subheading}>Trusted by thousands of customers</Text>
      </View>

      <View style={styles.row}>
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: "800",
  },
  subheading: {
    fontSize: 14,
    color: "#666",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    width: width / 2 - 24,
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
  },
  tag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 2,
  },
  tagText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  imageContainer: {
    width: "100%",
    height: 140,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  heartIcon: {
    position: "absolute",
    right: 6,
    top: 6,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: "600",
  },
  reviewsText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#999",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "800",
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 6,
  },
  discountBadge: {
    backgroundColor: "#ff4757",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  cartButton: {
    backgroundColor: "#111",
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 6,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingVertical: 8,
  },
  qtyButton: {
    backgroundColor: "#111",
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  qtyNumber: {
    marginHorizontal: 20,
    fontWeight: "bold",
  },
});
