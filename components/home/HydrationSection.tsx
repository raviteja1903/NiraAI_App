import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

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
];

export default function HydrationSection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hydration</Text>
      <Text style={styles.subHeading}>
        Expert-recommended hydration solutions for healthy skin
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hydrationItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: item.image }} style={styles.mainImage} />
              <Image source={{ uri: item.image2 }} style={styles.overlayImage} />
            </View>

            <View style={styles.content}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>

              {/* EXPLORE BUTTON */}
              <TouchableOpacity
                style={styles.ctaBtn}
                activeOpacity={0.85}
                onPress={() =>
                  router.push({
                    pathname: "/hydration-details",
                    params: {
                      id: item.id,
                      title: item.title,
                      desc: item.desc,
                      image: item.image,
                    },
                  })
                }
              >
                <Text style={styles.ctaText}>EXPLORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
      // marginBottom: 80,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 14,
    color: "#444",
    marginBottom: 18,
  },

  card: {
    width: 260,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginRight: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  imageWrapper: {
    width: "100%",
    height: 150,
  },

  mainImage: {
    width: "100%",
    height: "100%",
  },

  overlayImage: {
    position: "absolute",
    width: 70,
    height: 70,
    bottom: 8,
    right: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#FFF",
  },

  content: {
    padding: 14,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },

  cardDesc: {
    fontSize: 14,
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