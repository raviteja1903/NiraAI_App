import { useOrders } from "@/components/context/OrderContext";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function OrdersScreen() {
  const { orders } = useOrders();

  const getStatusColor = (status: string) => {
    const statusColors: { [key: string]: string } = {
      'Delivered': '#4CAF50',
      'Processing': '#FF9800',
      'Shipped': '#2196F3',
      'Cancelled': '#F44336',
    };
    return statusColors[status] || '#777';
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Orders</Text>

      {orders.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={{ fontSize: 64 }}>📦</Text>
          <Text style={styles.emptyHeading}>No orders yet</Text>
          <Text style={styles.emptySubtext}>
            Start shopping to see your orders here
          </Text>
        </View>
      ) : (
        orders.map((order) => (
          <View key={order.id} style={styles.card}>
            <Text style={styles.orderId}>
              Order ID: {order.id.slice(0, 8)}
            </Text>

            <Text style={styles.date}>
              {order.date}
            </Text>

            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) + '20' }]}>
              <Text style={[styles.status, { color: getStatusColor(order.status) }]}>
                {order.status}
              </Text>
            </View>

            <View style={styles.divider} />

            {order.items.map((item) => (
              <View key={item.id} style={styles.itemRow}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                  resizeMode="cover"
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.qty}>
                    Qty: {item.quantity}
                  </Text>
                </View>

                <Text style={styles.price}>
                  ₹{item.price * item.quantity}
                </Text>
              </View>
            ))}

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>
                Total:
              </Text>
              <Text style={styles.totalValue}>
                ₹{order.total}
              </Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 16,
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#222",
  },
  emptyBox: {
    alignItems: "center",
    marginTop: 60,
    paddingHorizontal: 40,
  },
  emptyHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  orderId: {
    fontWeight: "700",
    fontSize: 14,
    color: "#222",
  },
  date: {
    fontSize: 12,
    color: "#777",
    marginVertical: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  status: {
    fontSize: 13,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 12,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: "#F0F0F0",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
  qty: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  price: {
    fontWeight: "700",
    fontSize: 14,
    color: "#222",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  totalLabel: {
    fontWeight: "700",
    fontSize: 16,
    color: "#222",
  },
  totalValue: {
    fontWeight: "700",
    fontSize: 16,
    color: "#FF5A3C",
  },
});