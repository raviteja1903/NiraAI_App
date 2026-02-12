import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNav from "@/components/home/BottomNav";


export default function BookAppointmentScreen() {
  const { doctorName, day, time } = useLocalSearchParams<{
    doctorName: string;
    day: string;
    time: string;
  }>();

  return (
    <>
    {/* <Header/> */}
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Appointment</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Doctor : Dr. Gabriela Christie</Text>
        <Text style={styles.value}>{doctorName}</Text>

        <Text style={styles.label}>Day : 12 Fri 2026</Text>
        <Text style={styles.value}>{day}</Text>

        <Text style={styles.label}>Time : 10:30 am </Text>
        <Text style={styles.value}>{time}</Text>
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => router.replace("/doctor-consultation/appointment-success")}
      >
        <Text style={styles.confirmText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
    <BottomNav/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    padding: 24,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    color: "#777",
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 16,
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});
