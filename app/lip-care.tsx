import Header from "@/components/home/Header";
import LipCareProducts from "@/components/LipCareProducts/LipCareProducts";
 
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width } = Dimensions.get("window");
 
const lipcareImages = [
  { uri: "https://thumbs.dreamstime.com/b/lips-protection-close-up-beautiful-woman-lips-applying-lip-balm-lipcare-stick-lips-skin-care-cosmetics-concept-lips-protection-256268077.jpg" },
  { uri: "https://img.freepik.com/premium-photo/beautiful-woman-with-beauty-face-applying-lip-balm-lipcare-stick-lips-skincare-cosmetics-concept_264197-34304.jpg" },
  { uri: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800" },
];

export default function LipCareImageSlider() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % lipcareImages.length;

        scrollViewRef.current?.scrollTo({
          x: next * width,
          animated: true,
        });

        return next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <Header />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        
        <View style={styles.sliderContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
          >
            {lipcareImages.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={image} style={styles.image} />
              </View>
            ))}
          </ScrollView>

          
          <View style={styles.pagination}>
            {lipcareImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentIndex === index && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

       
        <View style={styles.productsContainer}>
          <LipCareProducts />
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",  
  },

  sliderContainer: {
    marginTop: 15,
    marginBottom: 20,
  },

  imageWrapper: {
    width: width,
    height: width * 0.6,
    paddingHorizontal: 16,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },

  pagination: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },

  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#ffc0cb",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: "#d63384",
  },

  productsContainer: {
    paddingTop: 10,
  },
});
