import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

const CATEGORIES = [
  {
    id: "all",
    title: "All Products",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
    full: true,
  },
  {
    id: "skin",
    title: "Skin Care",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
  },
  {
    id: "hair",
    title: "Hair Care",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
  },
  {
    id: "body",
    title: "Body Care",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  },
  {
    id: "lip",
    title: "Lip Care",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    id: "eye",
    title: "Eye Care",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    id: "uv",
    title: "UV Protection",
    image:
      "https://images.unsplash.com/photo-1598514982621-41c2c9db0b5d",
  },
  {
    id: "concerns",
    title: "Concerns",
    image:
      "https://images.unsplash.com/photo-1598511725754-bb9c6c02c96b",
  },
  {
    id: "baby",
    title: "Baby Care",
    image:
      "https://images.unsplash.com/photo-1604156788851-3b6c01e7b71f",
  },
  {
    id: "ingredients",
    title: "Ingredients",
    image:
      "https://images.unsplash.com/photo-1600180758895-77c1b27c8b6f",
  },
];

export default function CategoryGridScreen() {
  const renderItem = ({ item }: any) => {
    if (item.full) {
      return (
        <Pressable style={styles.fullCard}>
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.fullImage}
            imageStyle={styles.imageRadius}
          >
            <View style={styles.overlay} />
            <Text style={styles.fullText}>{item.title}</Text>
          </ImageBackground>
        </Pressable>
      );
    }

    return (
      <Pressable style={styles.card}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.image}
          imageStyle={styles.imageRadius}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>{item.title}</Text>
        </ImageBackground>
      </Pressable>
    );
  };

  return (
    <>
    <View style={styles.screen}>
     
      <Header />

      {/* CATEGORY GRID */}
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
      />
       <BottomNav/>
    </View>
    </>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  container: {
    padding: 16,
    gap: 16,
  },

  fullCard: {
    width: "100%",
    height: 180,
  },

  card: {
    width: CARD_WIDTH,
    height: 160,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  fullImage: {
    flex: 1,
    justifyContent: "center",
  },

  imageRadius: {
    borderRadius: 14,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 14,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  fullText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
});

 