import EyeCareProducts from "@/components/EyeCareProducts/EyeCareProducts";
import Header from "@/components/home/Header";
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

 
const eyeCareImages = [
  { uri: "https://tse1.mm.bing.net/th/id/OIP.fKCm07oxWGzyFaTpkC_3IgHaE7?pid=Api&h=220&P=0" },
  { uri: "https://images.prestigeonline.com/wp-content/uploads/2019/09/11104152/how-to-apply-eye-cream.jpg" },
  { uri: "https://www.myalcon.com/uk/sites/g/files/rbvwei2676/files/2022-03/Close%20up%20of%20eye%20and%20eye%20drops.png" },
];

export default function EyeCareImageSlider() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % eyeCareImages.length;

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
        {/* Eye Care Slider */}
        <View style={styles.sliderContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
          >
            {eyeCareImages.map((image, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={image} style={styles.image} />
              </View>
            ))}
          </ScrollView>

        
          <View style={styles.pagination}>
            {eyeCareImages.map((_, index) => (
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
      </Animated.ScrollView>
      <EyeCareProducts/>
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
    backgroundColor: "#b0c4de",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 22,
    backgroundColor: "#4169e1",
  },
});
