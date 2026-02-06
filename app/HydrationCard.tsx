import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const hydrationItems = [
  {
    id: "1",
    title: "Watermelon Splash",
    desc: "Cool and hydrating for summer",
    image: "https://www.nira-ai.co.in/assets/img016.jpg",
    image2: "https://www.nira-ai.co.in/assets/img002.jpg",
  },
  {
    id: "2",
    title: "Peach Tea",
    desc: "Zesty citrus and amla goodness.",
    image: "https://www.nira-ai.co.in/assets/img018.jpg",
    image2: "https://www.nira-ai.co.in/assets/img001.jpg",
  },
  {
    id: "3",
    title: "Tropical Sparkling Drink",
    desc: "Refreshing and fruity taste",
    image: "https://www.nira-ai.co.in/assets/img021.jpg",
    image2: "https://www.nira-ai.co.in/assets/img006.jpg",
  },
  {
    id: "4",
    title: "Berry Blast",
    desc: "Sweet and tangy explosion.",
    image: "https://www.nira-ai.co.in/assets/img020.jpg",
    image2: "https://www.nira-ai.co.in/assets/img006.jpg",
  },
  {
    id: "5",
    title: "Peach Tea",
    desc: "Zesty citrus and amla goodness.",
    image: "https://www.nira-ai.co.in/assets/img018.jpg",
    image2: "https://www.nira-ai.co.in/assets/img001.jpg",
  },
  {
    id: "6",
    title: "Berry Blast",
    desc: "Sweet and tangy explosion.",
    image: "https://www.nira-ai.co.in/assets/img020.jpg",
    image2: "https://www.nira-ai.co.in/assets/img006.jpg",
  },
];

export default function HydrationCard() {
  const handleAddToCart = (item: any) => {
    console.log("Added to cart:", item.title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Best Seller Products</Text>
      <Text style={styles.subHeading}>
        Expert-recommended hydration solutions for healthy skin
      </Text>
 
      <View style={styles.grid}>
        {hydrationItems.map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Images */}
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image }} style={styles.mainImage} />
              <Image
                source={{ uri: item.image2 }}
                style={styles.overlayImage}
              />
            </View>

            <View style={styles.content}>
              <Text style={styles.cardTitle} numberOfLines={1}>
                {item.title}
              </Text>

              <Text style={styles.cardDesc} numberOfLines={2}>
                {item.desc}
              </Text>

              <TouchableOpacity
                style={styles.ctaBtn}
                activeOpacity={0.85}
                onPress={() => handleAddToCart(item)}
              >
                <Text style={styles.ctaText}>Add to car</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 80,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 14,
    color: "#444",
    marginBottom: 18,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    marginBottom: 16,
  },

  imageWrapper: {
    width: "100%",
    height: 140,
  },

  mainImage: {
    width: "100%",
    height: "100%",
  },

  overlayImage: {
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 8,
    right: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FFF",
  },

  content: {
    padding: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardDesc: {
    fontSize: 13,
    color: "#555",
    marginBottom: 12,
  },

  ctaBtn: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 4,
  },

  ctaText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
