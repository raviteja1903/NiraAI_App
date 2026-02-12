import { useCart } from "@/components/context/CartContext";
import { useOrders } from "@/components/context/OrderContext";
import * as Location from "expo-location";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CheckoutScreen() {
  const { cartItems } = useCart();
  const { placeOrder } = useOrders();  
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  const [address, setAddress] = useState({
    name: "Ravi Teja",
    street: "Durgi",
    city: "Guntur",
    state: "AP",
    pincode: "522001",
  });

 

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const delivery = subtotal > 999 ? 0 : 49;
  const total = subtotal + delivery;
 

  const openGoogleMaps = () => {
    Linking.openURL("https://www.google.com/maps");
  };
 

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const geocode = await Location.reverseGeocodeAsync(location.coords);

      if (geocode.length > 0) {
        const place = geocode[0];

        setAddress({
          ...address,
          street: place.street || "",
          city: place.city || "",
          state: place.region || "",
          pincode: place.postalCode || "",
        });

        Alert.alert("Location Updated 📍");
      }
    } catch (error) {
      Alert.alert("Error getting location");
    }
  };
 

  const handlePayment = () => {
    if (cartItems.length === 0) {
      Alert.alert("Cart is empty");
      return;
    }

    placeOrder(cartItems, total);

    Alert.alert("Order Placed Successfully 🎉");

    router.replace("/orders");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Checkout</Text>
 

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>

          <Text style={styles.addressName}>{address.name}</Text>

          <Text style={styles.addressText}>
            {address.street}, {address.city}, {address.state} -{" "}
            {address.pincode}
          </Text>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.changeBtn}>Change Address</Text>
          </TouchableOpacity>
        </View>
 

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Order Summary</Text>

          {cartItems.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
              </View>
              <Text style={styles.itemPrice}>
                ₹{item.price * item.quantity}
              </Text>
            </View>
          ))}
        </View>
 

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Price Details</Text>

          <View style={styles.priceRow}>
            <Text>Subtotal</Text>
            <Text>₹{subtotal}</Text>
          </View>

          <View style={styles.priceRow}>
            <Text>Delivery Charges</Text>
            <Text>{delivery === 0 ? "Free" : `₹${delivery}`}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.priceRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>₹{total}</Text>
          </View>
        </View>
      </ScrollView>

 

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.payBtn} onPress={handlePayment}>
          <Text style={styles.payText}>Pay ₹{total}</Text>
        </TouchableOpacity>
      </View>
 

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Change Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={address.name}
            onChangeText={(text) => setAddress({ ...address, name: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Street"
            value={address.street}
            onChangeText={(text) => setAddress({ ...address, street: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="City"
            value={address.city}
            onChangeText={(text) => setAddress({ ...address, city: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="State"
            value={address.state}
            onChangeText={(text) => setAddress({ ...address, state: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Pincode"
            keyboardType="number-pad"
            value={address.pincode}
            onChangeText={(text) => setAddress({ ...address, pincode: text })}
          />

          <TouchableOpacity style={styles.mapBtn} onPress={openGoogleMaps}>
            <Text style={styles.mapText}>🗺 Open Google Maps</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.locationBtn}
            onPress={getCurrentLocation}
          >
            <Text style={styles.locationText}>📍 Use Current Location</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.saveText}>Save Address</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    margin: 16,
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 14,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },
  addressName: {
    fontWeight: "600",
  },
  addressText: {
    color: "#555",
    marginVertical: 4,
  },
  changeBtn: {
    color: "#FF5A3C",
    marginTop: 8,
    fontWeight: "600",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  itemTitle: {
    fontWeight: "600",
  },
  itemQty: {
    fontSize: 12,
    color: "#777",
  },
  itemPrice: {
    fontWeight: "700",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 10,
  },
  totalLabel: {
    fontWeight: "700",
    fontSize: 16,
  },
  totalValue: {
    fontWeight: "700",
    fontSize: 16,
    color: "#FF5A3C",
  },
  bottomContainer: {
    backgroundColor: "#FFF",
    padding: 16,
  },
  payBtn: {
    backgroundColor: "#111",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  payText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },
  mapBtn: {
    backgroundColor: "#E3F2FD",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 14,
  },
  mapText: {
    fontWeight: "600",
    color: "#1976D2",
  },
  locationBtn: {
    padding: 14,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 14,
  },
  locationText: {
    fontWeight: "600",
  },
  saveBtn: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "700",
  },
});
