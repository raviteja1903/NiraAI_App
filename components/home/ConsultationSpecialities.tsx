import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const specialities = [
  {
    id: "1",
    title: "Acne, Pimples & Breakouts",
    image: "https://i.pinimg.com/736x/3f/11/ce/3f11ce299836b9cfb8969151ec1c3a2c.jpg",
  },
  {
    id: "2",
    title: "Pigmentation & Dark Spots",
    image: "https://cdn.shopify.com/s/files/1/0692/4288/0277/articles/remove-dark-spots-permanently.webp?v=1673165774",
  },
  {
    id: "3",
    title: "Skin Dryness & Itching",
    image: "https://www.nira-ai.co.in/assets/dryness1-CMnuCxw2.jpg",
  },
  {
    id: "4",
    title: "Anti-Aging & Wrinkles",
    image: "https://tse4.mm.bing.net/th/id/OIP.KkLh3IyZiiOPO3QooJTK7AHaKI?pid=Api&P=0&h=220",
  },
  {
    id: "5",
    title: "Sensitive Skin Reactions",
    image: "https://www.nira-ai.co.in/assets/clinic3-DlLMWkHQ.jpg",
  },
  {
    id: "6",
    title: "Book a Derma Consultation",
    image: "https://www.nira-ai.co.in/assets/doctor1-D9_svLbz.jpg",
  },
];

export default function ConsultationSpecialities() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.heading}>
            Get Personalized Skin Consultations From Certified Experts
          </Text>
          <Text style={styles.subHeading}>
            Instant online consultations for acne, pigmentation, aging, dryness,
            and more.
          </Text>
        </View>

        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllText}>View All Specialities</Text>
        </TouchableOpacity>
      </View>

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {specialities.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.imageCircle}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>

            <Text style={styles.title}>{item.title}</Text>

            <TouchableOpacity style={styles.ctaBtn}>
              <Text style={styles.ctaText}>CONSULT NOW</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000000", 
    marginBottom: 6,
  },

  subHeading: {
    fontSize: 14,
    color: "#444444",  
    lineHeight: 20,
  },

  viewAllBtn: {
    borderWidth: 1,
    borderColor: "#000000",  
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 12,
      marginTop: 30,
  },

  viewAllText: {
    fontSize: 13,
  
    color: "#000000", // black text
    fontWeight: "500",
  },

  list: {
    paddingTop: 10,
  },

  card: {
    width: 140,
    alignItems: "center",
    marginRight: 18,
  },

  imageCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F2F2F2",  
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  title: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    color: "#000000",  
    marginBottom: 6,
  },

 ctaBtn: {
  marginTop: 6,
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 4,
  borderWidth: 1,
  borderColor: "#000000",
},

ctaText: {
  fontSize: 12,
  color: "#000000",
  fontWeight: "600",
},

});
