import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../home/Header";
import AICard from "../home/AICard";
import ProductList from "../home/ProductList";
import BottomNav from "../home/BottomNav";
import ShopByCategory from "../home/ShopByCategory";
import SkinInsightsSection from "../home/SkinInsightsSection";
import ShopByConcern from "../home/ShopByConcern";
import DoctorReferences from "../home/DoctorReferences";
import HydrationSection from "../home/HydrationSection";

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ShopByCategory />
        <AICard />
        <DoctorReferences />
        <ProductList />
        <SkinInsightsSection />
        
        <ShopByConcern />
        <HydrationSection />
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F4F6F6",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 3,
  },
});
