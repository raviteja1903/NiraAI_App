import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

/* ================= SLIDES ================= */

const slides = [
  {
    image: require("../../assets/images/personaldetailsIMG.jpeg"),
    title: "Personal Data Ownership",
    caption: `• Your health data belongs to you
- Not hospitals. Not platforms.`,
    micro:
      "Medical records, health metrics, genetic data — secured at the individual level.",
  },
  {
    image: require("../../assets/images/verified.jpeg"),
    title: "Every Action is Verified",
    caption: `• No silent changes
- Full accountability`,
    micro:
      "Records are cryptographically verified before they are shared or updated.",
  },
  {
    image: require("../../assets/images/Decentralized-NetworkIMG.jpeg"),
    title: "Decentralized Network",
    caption: `• No single point of control
    • No single point of control`,
    micro:
      "Clinics, labs, pharmacies, and insurers connect through a distributed trust network.",
  },
  {
    image: require("../../assets/images/Data-Architecture.jpeg"),
    title: "Hybrid Data Architecture",
    caption: `• Privacy-first by design
    • Privacy-first by design`,
    micro:
      "Sensitive data stays private. Only proofs and permissions are shared securely.",
  },
  {
    image: require("../../assets/images/Transparency.jpeg"),
    title: "Audit & Transparency",
    caption: `• Everything is traceable
    • Everything is traceable`,
    micro: "Every access is logged. Every update leaves a trail.",
  },
];

/* ================= COMPONENT ================= */

const DecentralizationSection = () => {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const translateX = useRef(new Animated.Value(width)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const arrowShake = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      translateX.setValue(width);
      opacity.setValue(0);

      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    };

    animate();

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      animate();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  // Arrow shake animation
  useEffect(() => {
    const shakeAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(arrowShake, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(arrowShake, {
          toValue: -5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(arrowShake, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(arrowShake, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.delay(2000), // Pause between shakes
      ])
    );

    shakeAnimation.start();

    return () => shakeAnimation.stop();
  }, []);

  const onCardPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const onCardPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const handleReadMore = () => {
    router.push("/(tabs)/mcash");
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>🔐 How Your Data Is Protected </Text>

      <Pressable
        onPress={handleReadMore}
        onPressIn={onCardPressIn}
        onPressOut={onCardPressOut}
      >
        <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
          {/* IMAGE */}
          <Animated.View
            style={{
              transform: [{ translateX }],
              opacity,
            }}
          >
            <ImageBackground
              source={slides[index].image}
              style={styles.imageBg}
              imageStyle={styles.image}
            />
          </Animated.View>

          {/* TEXT */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{slides[index].title}</Text>
            <Text style={styles.caption}>{slides[index].caption}</Text>
            <Text style={styles.micro}>{slides[index].micro}</Text>

            {/* READ MORE BUTTON */}
            <Pressable
              onPress={handleReadMore}
              onPressIn={onButtonPressIn}
              onPressOut={onButtonPressOut}
              style={styles.buttonWrapper}
            >
              <Animated.View
                style={[
                  styles.readMoreButton,
                  { transform: [{ scale: buttonScale }] },
                ]}
              >
                <Text style={styles.buttonText}>Read More</Text>
                <Animated.Text
                  style={[
                    styles.arrow,
                    { transform: [{ translateX: arrowShake }] },
                  ]}
                >
                  →
                </Animated.Text>
              </Animated.View>
            </Pressable>
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default DecentralizationSection;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24,
  },

  header: {
    marginLeft: 16,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  card: {
    width: width - 24,
    alignSelf: "center",
    borderRadius: 28,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },

  imageBg: {
    width: "100%",
    height: 240,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  textContainer: {
    padding: 16,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 6,
  },

  caption: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 8,
  },

  micro: {
    fontSize: 11,
    color: "#888",
    lineHeight: 16,
    marginBottom: 12,
  },

  buttonWrapper: {
    marginTop: 4,
  },

  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFB366",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "800",
    color: "black",
  },

  arrow: {
    fontSize: 20,
    color: "black",
    fontWeight: "800",
  },
});