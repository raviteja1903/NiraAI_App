import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const doctors = [
  {
    id: "1",
    name: "Dr. Sabreena Khan",
    specialty: "Dermatologist",
    latitude: 17.385044,
    longitude: 78.486671,
  },
  {
    id: "2",
    name: "Dr. Rahul Verma",
    specialty: "Physician",
    latitude: 17.39,
    longitude: 78.48,
  },
];

export default function FindDoctorsMapScreen() {
  const [location, setLocation] = useState<any>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Location permission denied");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});

      setLocation(currentLocation.coords);
    })();
  }, []);

  if (!location) {
    return <View style={{ flex: 1, backgroundColor: "#fff" }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#777" />
        <TextInput
          placeholder="Search doctor, hospital..."
          style={styles.searchInput}
        />
      </View>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation
      >
        {doctors.map((doc) => (
          <Marker
            key={doc.id}
            coordinate={{
              latitude: doc.latitude,
              longitude: doc.longitude,
            }}
            pinColor="#4CAF50"
            onPress={() => setSelectedDoctor(doc)}
          />
        ))}
      </MapView>

      {selectedDoctor && (
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?name=Doctor&background=4CAF50&color=fff",
            }}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{selectedDoctor.name}</Text>
            <Text style={styles.specialty}>{selectedDoctor.specialty}</Text>
          </View>

          <TouchableOpacity style={styles.chatBtn}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    borderRadius: 12,
    height: 44,
    elevation: 5,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
  },

  card: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    elevation: 10,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
  },

  specialty: {
    fontSize: 12,
    color: "#777",
  },

  chatBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
  },
});
