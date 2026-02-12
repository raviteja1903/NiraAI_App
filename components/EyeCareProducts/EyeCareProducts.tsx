import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useCart } from "../context/CartContext";

const { width } = Dimensions.get("window");

type Product = {
  id: string;
  name: string;
  price: number;
  rating: string;
  image: string;
};

const eyeProducts: Product[] = [
  {
    id: "1",
    name: "Under Eye Cream",
    price: 499,
    rating: "4.6",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/220211084840-dark-circles-lead-olay-amazon.jpg?c=16x9&q=h_720,w_1280,c_fill",
  },
  {
    id: "2",
    name: "Dark Circle Serum",
    price: 599,
    rating: "4.8",
    image:
      "https://www.nira-ai.co.in/assets/niacinamide_10_serum.png",
  },
  {
    id: "3",
    name: "Hydrating Eye Gel",
    price: 399,
    rating: "4.5",
    image:
      "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/a/p/apivita-aqua-beelicious-cooling-hydrating-eye-gel-15ml_1.jpg",
  },
  {
    id: "4",
    name: "Cooling Eye Roll-On",
    price: 449,
    rating: "4.7",
    image:
      "https://m.media-amazon.com/images/I/91mJompmBKL._AC_.jpg",
  },
];

export default function EyeCareProducts() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const getCartQuantity = (id: string) => {
    const item = cartItems.find((i) => i.id === Number(id));
    return item ? item.quantity : 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eye Care Products 👁</Text>

      <View style={styles.grid}>
        {eyeProducts.map((item) => {
          const quantity = getCartQuantity(item.id);

          return (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={styles.name}>{item.name}</Text>

              <View style={styles.row}>
                <Text style={styles.price}>₹{item.price}</Text>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
              </View>

              {/* Add to Cart / Quantity Controls */}
              {quantity === 0 ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    addToCart({
                      id: Number(item.id),
                      title: item.name,
                      price: item.price,
                      image: item.image,
                    })
                  }
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() => removeFromCart(Number(item.id))}
                  >
                    <Text style={styles.qtyText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyNumber}>{quantity}</Text>

                  <TouchableOpacity
                    style={styles.qtyButton}
                    onPress={() =>
                      addToCart({
                        id: Number(item.id),
                        title: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                  >
                    <Text style={styles.qtyText}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#111111",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#fff",
    width: (width - 50) / 2,
    marginBottom: 15,
    borderRadius: 15,
    padding: 10,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  price: {
    fontWeight: "bold",
    color: "#111111",
  },

  rating: {
    fontSize: 12,
  },

  button: {
    backgroundColor: "#111111",
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
    paddingVertical: 6,
  },

  qtyButton: {
    backgroundColor: "#111111",
    width: 30,
    height: 30,
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
    marginHorizontal: 15,
    fontWeight: "bold",
  },
});
