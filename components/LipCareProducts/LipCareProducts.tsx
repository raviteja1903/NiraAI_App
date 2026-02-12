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

const lipProducts: Product[] = [
  {
    id: "1",
    name: "Hydrating Lip Balm",
    price: 199,
    rating: "4.5",
    image:
      "https://media.istockphoto.com/photos/lip-balm-picture-id638840642?k=6&m=638840642&s=612x612&w=0&h=Pb1DKmm-NpBCFhTbeQofhvbXUqOy7yH-5qPOfO2zDWw=",
  },
  {
    id: "2",
    name: "Rose Lip Gloss",
    price: 299,
    rating: "4.7",
    image:
      "https://png.pngtree.com/png-vector/20230506/ourmid/pngtree-beauty-makeup-products-png-image_7083077.png",
  },
  {
    id: "3",
    name: "Cherry Lip Care",
    price: 249,
    rating: "4.6",
    image:
      "https://m.media-amazon.com/images/I/51BOF--jfRL._SL1000_.jpg",
  },
  {
    id: "4",
    name: "Vitamin E Lip Repair",
    price: 349,
    rating: "4.8",
    image:
      "https://m.media-amazon.com/images/I/617-qsn2DWL.jpg",
  },
];

export default function LipCareProducts() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const getCartQuantity = (id: string) => {
    const item = cartItems.find((i) => i.id === Number(id));
    return item ? item.quantity : 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lip Care Products 💄</Text>

      <View style={styles.grid}>
        {lipProducts.map((item) => {
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
    color: "black",
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
    color: "black",
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
