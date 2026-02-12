import { useCart } from "@/components/context/CartContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CartScreen() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, cartCount } =
    useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🛒</Text>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Text style={styles.emptySubtext}>
            Add some items to get started!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My Cart 🛒</Text>
          <Text style={styles.itemCount}>{cartCount} items</Text>
        </View>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.details}>
                <Text style={styles.itemTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.price}>₹{item.price}</Text>

                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Text style={styles.quantityButtonText}>−</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>{item.quantity}</Text>

                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Ionicons name="trash-outline" size={20} color="#ff4444" />
              </TouchableOpacity>
            </View>
          )}
        />

        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>₹{totalPrice.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => router.push("/checkout")}
          >
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 36,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#333",
    marginBottom: 8,
  },
  itemCount: {
    fontSize: 14,
    color: "#666",
  },
  listContainer: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2e7d32",
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 32,
    height: 32,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 16,
    color: "#333",
  },
  removeButton: {
    padding: 8,
  },
  removeButtonText: {
    fontSize: 20,
  },
  footer: {
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2e7d32",
  },
  checkoutButton: {
    backgroundColor: "#2e7d32",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: "#666",
  },
});
