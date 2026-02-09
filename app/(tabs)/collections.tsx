import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    id: "1",
    title: "Skincare",
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07",
  },
  {
    id: "2",
    title: "Makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: "3",
    title: "Haircare",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
  },
  {
    id: "4",
    title: "Bath & Body",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
  },
  {
    id: "5",
    title: "Fragrance",
    image: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d",
  },
];

const products = [
  {
    id: "1",
    title: "SERUMS ESSENCE",
    image: "https://www.nira-ai.co.in/assets/salicylic_lha_cleanser.png",
  },
  {
    id: "2",
    title: "SUNSCREEN",
    image: "https://www.nira-ai.co.in/assets/spf50_sunscreen.png",
  },
  {
    id: "3",
    title: "FACE MOISTURIZER",
    image: "https://www.nira-ai.co.in/assets/salicylic_acid_serum.png",
  },
  {
    id: "4",
    title: "FACE WASH",
    image: "https://www.nira-ai.co.in/assets/vitamin_c_serum.png",
  },
];

const hydrationProducts = [
  {
    id: "1",
    title: "HYDRATION",
    image: "https://www.nira-ai.co.in/assets/img016.jpg",
  },
  {
    id: "2",
    title: "HYDRATION",
    image: "https://www.nira-ai.co.in/assets/img016.jpg",
  },
  {
    id: "3",
    title: "HYDRATION",
    image: "https://www.nira-ai.co.in/assets/img016.jpg",
  },
  {
    id: "4",
    title: "HYDRATION",
    image: "https://www.nira-ai.co.in/assets/img016.jpg",
  },
];

export default function SkincareScreen() {
  const [activeCategory, setActiveCategory] = useState("Skincare");

  return (
    <>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Categories */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => setActiveCategory(item.title)}
            >
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.categoryImageBg}
                imageStyle={styles.categoryImageStyle}
              >
                <View style={styles.categoryOverlay} />
                <Text style={styles.categoryText}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />

        {/* Skincare Section */}
        <View style={styles.section}>
          <ImageBackground
            source={require("../../assets/images/SkinCareIMG.jpeg")}
            style={styles.sectionBg}
            imageStyle={styles.sectionBgImage}
          >
            <Text style={styles.sectionTitle}>SKINCARE</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={products}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.productList}
              renderItem={({ item }) => (
                <View style={styles.productCard}>
                  <View style={styles.productImageContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.productImage}
                    />
                  </View>
                  <View style={styles.productTextContainer}>
                    <Text style={styles.productText}>{item.title}</Text>
                  </View>
                </View>
              )}
            />
          </ImageBackground>
        </View>

        {/* Makeup Section */}
        <View style={styles.section}>
          <ImageBackground
            source={require("../../assets/images/hydrationIMG.jpeg")}
            style={styles.sectionBg}
            imageStyle={styles.sectionBgImage}
          >
            <Text style={styles.sectionTitle}>Hydra</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={hydrationProducts}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.productList}
              renderItem={({ item }) => (
                <View style={styles.productCard}>
                  <View style={styles.productImageContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.productImage}
                    />
                  </View>
                  <View style={styles.productTextContainer}>
                    <Text style={styles.productText}>{item.title}</Text>
                  </View>
                </View>
              )}
            />
          </ImageBackground>
        </View>
      </ScrollView>

      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Category styles
  categoryList: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  categoryItem: {
    marginRight: 12,
  },
  categoryImageBg: {
    width: 70,
    height: 90,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 8,
  },
  categoryImageStyle: {
    borderRadius: 12,
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    textTransform: "capitalize",
  },

  // Section styles
  section: {
    marginHorizontal: 12,
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
  },
  sectionBg: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  sectionBgImage: {
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#5a3b1e",
    marginBottom: 16,
    letterSpacing: 2,
  },

  // Product styles
  productList: {
    paddingRight: 16,
  },
  productCard: {
    width: 140,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImageContainer: {
    width: "100%",
    height: 120,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "85%",
    height: "85%",
    resizeMode: "contain",
  },
  productTextContainer: {
    padding: 10,
    minHeight: 50,
    justifyContent: "center",
  },
  productText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});