import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    id: "1",
    title: "Radiant Serum",
    desc: "Daily glow serum",
    image: "https://www.nira-ai.co.in/assets/salicylic_lha_cleanser.png",
  },
  {
    id: "2",
    title: "Gentle Cleanser",
    desc: "Soothing cleanser",
    image: "https://www.nira-ai.co.in/assets/spf50_sunscreen.png",
  },
  {
    id: "3",
    title: "Night Cream",
    desc: "Hydrating formula",
    image: "https://www.nira-ai.co.in/assets/salicylic_acid_serum.png",
  },
  {
    id: "4",
    title: "Vitamin C Serum",
    desc: "Brightening skin",
    image: "https://www.nira-ai.co.in/assets/vitamin_c_serum.png",
  },
  {
    id: "5",
    title: "Aloe Moisturizer",
    desc: "Deep hydration",
    image: "https://www.nira-ai.co.in/assets/img19-5TLsh0Ii.jpg",
  },
  {
    id: "6",
    title: "Sunscreen SPF 50",
    desc: "UV protection",
    image: "https://www.nira-ai.co.in/assets/niacinamide_10_serum.png",
  },
  {
    id: "7",
    title: "Face Toner",
    desc: "Pore tightening",
    image: "https://www.nira-ai.co.in/assets/alpha_arbutin_serum.png",
  },
  {
    id: "8",
    title: "Under Eye Cream",
    desc: "Reduces dark circles",
    image: "https://www.nira-ai.co.in/assets/niacinamide_5_serum.png",
  },
  {
    id: "9",
    title: "Charcoal Mask",
    desc: "Deep cleanse",
    image: "https://www.nira-ai.co.in/assets/pha_toner.png",
  },
  {
    id: "10",
    title: "Rose Water",
    desc: "Refreshing mist",
    image: "https://www.nira-ai.co.in/assets/marula_oil_moisturizer.png",
  },
  {
    id: "11",
    title: "Anti Acne Gel",
    desc: "Clear skin formula",
    image: "https://www.nira-ai.co.in/assets/vitamin_c_e_ferulic_serum.png",
  },
  {
    id: "12",
    title: "Lip Balm",
    desc: "Soft & smooth lips",
    image: "https://www.nira-ai.co.in/assets/hyaluronic_pga_serum.png",
  },
  {
    id: "13",
    title: "Face Scrub",
    desc: "Gentle exfoliation",
    image: "https://www.nira-ai.co.in/assets/retinol_serum.png",
  },
  {
    id: "14",
    title: "Hair Serum",
    desc: "Silky shine",
    image: "https://www.nira-ai.co.in/assets/aha_pha_bha_peel.png",
  },
  {
    id: "15",
    title: "Body Lotion",
    desc: "All day moisture",
    image: "https://www.nira-ai.co.in/assets/spf60_sunscreen.png",
  },
  {
    id: "16",
    title: "Foot Cream",
    desc: "Crack repair",
    image: "https://www.nira-ai.co.in/assets/glycolic_8_liquid.png",
  },
  {
    id: "17",
    title: "Hand Cream",
    desc: "Soft hands",
    image: "https://www.nira-ai.co.in/assets/zinc_serum.png",
  },
  {
    id: "18",
    title: "Makeup Remover",
    desc: "Gentle cleanse",
    image: "https://www.nira-ai.co.in/assets/ceramide_moisturizer.png",
  },
  {
    id: "19",
    title: "Face Oil",
    desc: "Nourishing blend",
    image: "https://www.nira-ai.co.in/assets/kojic_acid_serum.png",
  },
];

export default function ProductList() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      {PRODUCTS.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          image={item.image}
          isWishlisted={wishlist.has(item.id)}
          onToggleWishlist={toggleWishlist}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    gap: 14,
    marginTop: 20,
    marginBottom: 20,
  },
});