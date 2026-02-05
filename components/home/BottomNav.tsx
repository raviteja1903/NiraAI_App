import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

const tabs = [
  {
    key: "index",
    label: "Home",
    icon: "home",
    route: "/(tabs)/home" as const,
  },
  {
    key: "collections",
    label: "categories",
    icon: "apps",
    route: "/(tabs)/collections" as const,
  },
  {
    key: "analyser",
    label: "Skin Analyser",
    icon: "sparkles",
    route: "/(tabs)/analyser" as const,
  },
  {
    key: "mcash",
    label: "Mcash",
    icon: "medal-outline",
    route: "/(tabs)/mcash" as const,
  },
  {
    key: "account",
    label: "Account",
    icon: "person-outline",
    route: "/(tabs)/profileaccount" as const,
  },
] as const;

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
 
  const bgOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(bgOpacity, {
      toValue: 0.25,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [pathname]);

  return (
    <View style={styles.wrapper}>
 
      <Animated.View
        pointerEvents="none"
        style={[
          styles.backdrop,
          { opacity: bgOpacity },
        ]}
      />

      <View style={styles.nav}>
        {tabs.map((item) => {
          const isActive = pathname === item.route;

          return (
            <AnimatedTab
              key={item.key}
              item={item}
              isActive={isActive}
              onPress={() => router.push(item.route)}
            />
          );
        })}
      </View>
    </View>
  );
}

function AnimatedTab({
  item,
  isActive,
  onPress,
}: {
  item: (typeof tabs)[number];
  isActive: boolean;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: isActive ? 1.15 : 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: isActive ? -6 : 0, 
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isActive]);

  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.tab,
          isActive && styles.activeTab,
          {
            transform: [{ scale }, { translateY }],
          },
        ]}
      >
        <Ionicons
          name={item.icon as any}
          size={20}
          color={isActive ? "#FFFFFF" : "#000000"}
        />
        <Text style={[styles.label, isActive && styles.activeLabel]}>
          {item.label}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    alignItems: "center",
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
    borderRadius: 30,
  },

  nav: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 6,
    gap: 6,
    elevation: 10,
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 18,
  },

  activeTab: {
    backgroundColor: "#000000",
  },

  label: {
    marginTop: 2,
    fontSize: 10,
    color: "#000000",
    fontWeight: "500",
  },

  activeLabel: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
