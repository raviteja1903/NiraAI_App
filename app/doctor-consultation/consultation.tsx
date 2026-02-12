import BottomNav from "@/components/home/BottomNav";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Category = "Skin Care" | "Nutrition" | "Hydration";

type Expert = {
  id: string;
  name: string;
  category: Category;
  rating: number;
  fee: string;
  image: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const experts: Expert[] = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    category: "Skin Care",
    rating: 5,
    fee: "$40",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    icon: "sparkles-outline",
  },
  {
    id: "2",
    name: "Dr. Jane Cooper",
    category: "Nutrition",
    rating: 4.8,
    fee: "$30",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    icon: "nutrition-outline",
  },
  {
    id: "3",
    name: "Dr. Guy Hawkins",
    category: "Hydration",
    rating: 4.7,
    fee: "$28",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    icon: "water-outline",
  },
  {
    id: "4",
    name: "Dr. Courtney Henry",
    category: "Skin Care",
    rating: 4.9,
    fee: "$35",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    icon: "sparkles-outline",
  },
  {
    id: "5",
    name: "Dr. Devon Lane",
    category: "Nutrition",
    rating: 4.6,
    fee: "$26",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    icon: "nutrition-outline",
  },
  {
    id: "6",
    name: "Dr. Eleanor Pena",
    category: "Hydration",
    rating: 4.8,
    fee: "$29",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    icon: "water-outline",
  },
  {
    id: "7",
    name: "Dr. Jacob Jones",
    category: "Skin Care",
    rating: 4.7,
    fee: "$33",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    icon: "sparkles-outline",
  },
  {
    id: "8",
    name: "Dr. Kristin Watson",
    category: "Nutrition",
    rating: 4.9,
    fee: "$38",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    icon: "nutrition-outline",
  },
  {
    id: "9",
    name: "Dr. Robert Fox",
    category: "Hydration",
    rating: 4.6,
    fee: "$27",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    icon: "water-outline",
  },
  {
    id: "10",
    name: "Dr. Annette Black",
    category: "Skin Care",
    rating: 5,
    fee: "$42",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    icon: "sparkles-outline",
  },
];

export default function DoctorsScreen() {
  const renderItem = ({ item }: { item: Expert }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/doctor-consultation/doctor-details",
          params: { id: item.id },
        })
      }
    >
      <Ionicons name={item.icon} size={18} color="#000" />

      <Image source={{ uri: item.image }} style={styles.avatar} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>

      <View style={styles.row}>
        <Ionicons name="star" size={14} color="#FFC107" />
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.fee}>{item.fee}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Skin Experts</Text>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#999" />
          <TextInput
            placeholder="Search skin, nutrition, hydration..."
            style={styles.searchInput}
          />
        </View>

        <FlatList
          data={experts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.column}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    paddingTop: 40,
    textAlign: "center",
  },

  searchBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },

  column: {
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    width: "48%",
    marginBottom: 16,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginVertical: 8,
  },

  name: {
    fontWeight: "700",
    fontSize: 14,
  },

  category: {
    fontSize: 12,
    color: "#777",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  rating: {
    marginLeft: 4,
    fontSize: 12,
  },

  fee: {
    marginLeft: "auto",
    fontSize: 12,
    fontWeight: "600",
  },
});
