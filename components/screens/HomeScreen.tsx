import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AICard from "../home/AICard";
import BottomNav from "../home/BottomNav";
import DecentralizationSection from "../home/DecentralizationSection";
import DoctorReferences from "../home/DoctorReferences";
import Header from "../home/Header";
import HydrationSection from "../home/HydrationSection";
import ProductList from "../home/ProductList";
import ShopByCategory from "../home/ShopByCategory";
import ShopByConcern from "../home/ShopByConcern";
import SkinInsightsSection from "../home/SkinInsightsSection";

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
        <DecentralizationSection />

        <View style={{ marginTop: 24 }}>
          <SkinInsightsSection />
        </View>

        <DoctorReferences />
        <ShopByConcern />
        <HydrationSection />

    
        <ProductList />
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
