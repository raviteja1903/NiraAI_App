import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

type Product = {
  id: string;
  title: string;
  desc: string;
  image: string;
  price: number;
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Radiant Serum",
    desc: "Daily glow serum",
    image: "https://www.nira-ai.co.in/assets/salicylic_lha_cleanser.png",
    price: 299,
  },
  {
    id: "2",
    title: "Gentle Cleanser",
    desc: "Soothing cleanser",
    image: "https://www.nira-ai.co.in/assets/spf50_sunscreen.png",
    price: 349,
  },
  {
    id: "3",
    title: "Night Cream",
    desc: "Hydrating formula",
    image: "https://www.nira-ai.co.in/assets/salicylic_acid_serum.png",
    price: 399,
  },
];

export default function ProductList() {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const { addToCart, removeFromCart, cartItems } = useCart();

  /* ================= WISHLIST ================= */

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

  /* ================= CART QUANTITY ================= */

  const getCartQuantity = (id: string) => {
    const item = cartItems.find((i) => i.id === Number(id));
    return item ? item.quantity : 0;
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
          title={item.title}
          desc={item.desc}
          image={item.image}
          isWishlisted={wishlist.has(item.id)}
          
          /* ✅ FIXED */
          onToggleWishlist={() => toggleWishlist(item.id)}

          cartQuantity={getCartQuantity(item.id)}

          /* Add */
          onAddToCart={() =>
            addToCart({
              id: Number(item.id),
              title: item.title,
              price: item.price,
              image: item.image,
            })
          }

          /* Remove */
          onRemoveFromCart={() =>
            removeFromCart(Number(item.id))
          }
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
