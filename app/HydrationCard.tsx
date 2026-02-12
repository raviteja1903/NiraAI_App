import { useCart } from "@/components/context/CartContext";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type HydrationItem = {
  id: string;
  title: string;
  desc: string;
  price: number;
  image: string;
  image2: string;
  badge?: string;
};

const hydrationItems: HydrationItem[] = [
  {
    id: "1",
    title: "Watermelon Splash",
    desc: "Cool and hydrating for summer",
    price: 199,
    image: "https://www.nira-ai.co.in/assets/img016.jpg",
    image2: "https://www.nira-ai.co.in/assets/img002.jpg",
    badge: "BEST SELLER",
  },
  {
    id: "2",
    title: "Peach Tea",
    desc: "Zesty citrus and amla goodness.",
    price: 249,
    image: "https://www.nira-ai.co.in/assets/img018.jpg",
    image2: "https://www.nira-ai.co.in/assets/img001.jpg",
    badge: "NEW",
  },
  {
    id: "3",
    title: "Tropical Sparkling Drink",
    desc: "Refreshing and fruity taste",
    price: 299,
    image: "https://www.nira-ai.co.in/assets/img021.jpg",
    image2: "https://www.nira-ai.co.in/assets/img006.jpg",
  },
  {
    id: "4",
    title: "Berry Blast",
    desc: "Sweet and tangy explosion.",
    price: 279,
    image: "https://www.nira-ai.co.in/assets/img020.jpg",
    image2: "https://www.nira-ai.co.in/assets/img006.jpg",
    badge: "POPULAR",
  },
];

 
const ProductCard = ({ item }: { item: HydrationItem }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const [imageLoading, setImageLoading] = useState(true);
  const [showAddedFeedback, setShowAddedFeedback] = useState(false);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const cardScale = useRef(new Animated.Value(1)).current;

  const getQuantity = (id: string) => {
    const cartItem = cartItems.find((i) => i.id === Number(id));
    return cartItem ? cartItem.quantity : 0;
  };

  const quantity = getQuantity(item.id);

   
  const triggerHaptic = () => {
   
    console.log("Haptic feedback triggered");
  };

  const handleAddToCart = () => {
    triggerHaptic();

     
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
 
    setShowAddedFeedback(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setShowAddedFeedback(false));
    }, 1000);

    addToCart({
      id: Number(item.id),
      title: item.title,
      price: item.price,
      image: item.image,
    });
  };

  const handleRemoveFromCart = () => {
    triggerHaptic();
    removeFromCart(Number(item.id));
  };

  const handleIncrement = () => {
    triggerHaptic();
    addToCart({
      id: Number(item.id),
      title: item.title,
      price: item.price,
      image: item.image,
    });
  };

  const handleCardPressIn = () => {
    Animated.spring(cardScale, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handleCardPressOut = () => {
    Animated.spring(cardScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: cardScale }] }]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPressIn={handleCardPressIn}
        onPressOut={handleCardPressOut}
      >
        {item.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}

        <View style={styles.imageWrapper}>
          {imageLoading && (
            <View style={styles.imagePlaceholder}>
              <ActivityIndicator size="small" color="#000" />
            </View>
          )}
          <Image
            source={{ uri: item.image }}
            style={styles.mainImage}
            onLoadEnd={() => setImageLoading(false)}
          />
          <Image source={{ uri: item.image2 }} style={styles.overlayImage} />
        </View>

        <View style={styles.content}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {item.title}
          </Text>

          <Text style={styles.cardDesc} numberOfLines={2}>
            {item.desc}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{item.price}</Text>
            <View style={styles.savingsTag}>
              <Text style={styles.savingsText}>Save 20%</Text>
            </View>
          </View>

          {quantity === 0 ? (
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <TouchableOpacity
                style={styles.ctaBtn}
                onPress={handleAddToCart}
                activeOpacity={0.8}
              >
                <Text style={styles.ctaText}>Add to cart</Text>
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={handleRemoveFromCart}
                activeOpacity={0.7}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Animated.Text style={styles.qtyNumber}>{quantity}</Animated.Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={handleIncrement}
                activeOpacity={0.7}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          )}

          {showAddedFeedback && (
            <Animated.View
              style={[styles.addedFeedback, { opacity: fadeAnim }]}
            >
              <Text style={styles.addedText}>✓ Added!</Text>
            </Animated.View>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function HydrationCard() {
  const headerFadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(headerFadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: headerFadeAnim }}>
        <Text style={styles.heading}>Our Best Seller Products</Text>
        <Text style={styles.subHeading}>
          Expert-recommended hydration solutions for healthy skin
        </Text>
      </Animated.View>

      <View style={styles.grid}>
        {hydrationItems.map((item, index) => (
          <ProductCard key={item.id} item={item} />
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
    backgroundColor: "#F9FAFB",
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
    color: "#111827",
  },

  subHeading: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
    lineHeight: 20,
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
    borderColor: "#E5E7EB",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10,
  },

  badgeText: {
    color: "#FFF",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  imageWrapper: {
    width: "100%",
    height: 140,
    backgroundColor: "#F3F4F6",
  },

  imagePlaceholder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    zIndex: 1,
  },

  mainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  content: {
    padding: 12,
    position: "relative",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
    color: "#111827",
  },

  cardDesc: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 8,
    lineHeight: 16,
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  savingsTag: {
    backgroundColor: "#DEF7EC",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  savingsText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#047857",
  },

  ctaBtn: {
    borderWidth: 1.5,
    borderColor: "#111827",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },

  ctaText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
    textAlign: "center",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  qtyButton: {
    backgroundColor: "#111827",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  qtyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  qtyNumber: {
    marginHorizontal: 14,
    fontWeight: "700",
    fontSize: 16,
    color: "#111827",
    minWidth: 20,
    textAlign: "center",
  },

  addedFeedback: {
    position: "absolute",
    top: 8,
    right: 12,
    backgroundColor: "#047857",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },

  addedText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "600",
  },
});
