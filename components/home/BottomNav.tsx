import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const tabs = [
  {
    key: "home",
    label: "Home",
    icon: "home-outline",
    activeIcon: "home",
    route: "/(tabs)/home",
    match: "home",
  },
  {
    key: "categories",
    label: "Categories",
    icon: "grid-outline",
    activeIcon: "grid",
    route: "/(tabs)/collections",
    match: "collections",
  },
  {
    key: "analyser",
    label: "Analyser",
    icon: "sparkles-outline",
    activeIcon: "sparkles",
    route: "/(tabs)/analyser",
    match: "analyser",
  },
  {
    key: "tokens",
    label: "Tokens",
    icon: "wallet-outline",
    activeIcon: "wallet",
    route: "/(tabs)/mcash",
    match: "mcash",
  },
  {
    key: "account",
    label: "Account",
    icon: "person-outline",
    activeIcon: "person",
    route: "/(tabs)/profileaccount",
    match: "profileaccount",
  },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState("home");
  const slideAnim = useRef(new Animated.Value(0)).current;
  const navOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Initial mount animation
    Animated.timing(navOpacity, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const found = tabs.find((t) => pathname.includes(t.match));
    if (found) {
      setActiveKey(found.key);
      const index = tabs.findIndex((t) => t.key === found.key);

      // Animate indicator slide
      Animated.spring(slideAnim, {
        toValue: index,
        useNativeDriver: true,
        friction: 8,
        tension: 100,
      }).start();
    }
  }, [pathname]);

  const handlePress = (tab: (typeof tabs)[number]) => {
    setActiveKey(tab.key);
    router.push(tab.route as any);
  };

  return (
    <Animated.View style={[styles.wrapper, { opacity: navOpacity }]}>
      <View style={styles.nav}>
        {/* Animated sliding indicator */}
        <Animated.View
          style={[
            styles.activeIndicator,
            {
              transform: [
                {
                  translateX: slideAnim.interpolate({
                    inputRange: tabs.map((_, i) => i),
                    outputRange: tabs.map(
                      (_, i) => i * (100 / tabs.length) + "%",
                    ),
                  }),
                },
              ],
              width: `${100 / tabs.length}%`,
            },
          ]}
        >
          <View style={styles.indicatorDot} />
        </Animated.View>

        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            tab={tab}
            isActive={activeKey === tab.key}
            onPress={() => handlePress(tab)}
          />
        ))}
      </View>
    </Animated.View>
  );
}

function Tab({
  tab,
  isActive,
  onPress,
}: {
  tab: (typeof tabs)[number];
  isActive: boolean;
  onPress: () => void;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const dotScale = useRef(new Animated.Value(0)).current;
  const iconRotate = useRef(new Animated.Value(0)).current;
  const labelOpacity = useRef(new Animated.Value(0.6)).current;
  const iconTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: isActive ? 1.05 : 1,
        useNativeDriver: true,
        friction: 7,
        tension: 100,
      }),

      Animated.spring(dotScale, {
        toValue: isActive ? 1 : 0,
        useNativeDriver: true,
        friction: 6,
        tension: 120,
      }),

      Animated.spring(iconRotate, {
        toValue: isActive ? 1 : 0,
        useNativeDriver: true,
        friction: 8,
        tension: 80,
      }),

      Animated.timing(labelOpacity, {
        toValue: isActive ? 1 : 0.6,
        duration: 200,
        useNativeDriver: true,
      }),

      Animated.sequence([
        Animated.spring(iconTranslateY, {
          toValue: isActive ? -3 : 0,
          useNativeDriver: true,
          friction: 5,
          tension: 100,
        }),
        Animated.spring(iconTranslateY, {
          toValue: 0,
          useNativeDriver: true,
          friction: 7,
          tension: 100,
        }),
      ]),
    ]).start();
  }, [isActive]);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: isActive ? 1.05 : 1,
        useNativeDriver: true,
        friction: 7,
        tension: 100,
      }),
    ]).start();

    onPress();
  };

  const rotateInterpolate = iconRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={styles.tabTouchable}
    >
      <Animated.View style={[styles.tabContainer, { transform: [{ scale }] }]}>
        <Animated.View
          style={[
            styles.iconWrapper,
            { transform: [{ translateY: iconTranslateY }] },
          ]}
        >
          <Animated.View
            style={[styles.circle, { transform: [{ scale: dotScale }] }]}
          />
          <Animated.View
            style={{
              transform: [{ rotate: rotateInterpolate }],
            }}
          >
            <Ionicons
              name={(isActive ? tab.activeIcon : tab.icon) as any}
              size={20}
              color={isActive ? "#FFFFFF" : "#999999"}
            />
          </Animated.View>
        </Animated.View>

        <Animated.Text
          style={[
            styles.tabLabel,
            isActive && styles.tabLabelActive,
            { opacity: labelOpacity },
          ]}
          numberOfLines={1}
        >
          {tab.label}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 28 : 16,
    left: 12,
    right: 12,
  },
  nav: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
    position: "relative",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 4,
    height: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#111111",
  },
  tabTouchable: {
    flex: 1,
  },
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111111",
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
    color: "#999999",
    fontWeight: "500",
  },
  tabLabelActive: {
    color: "#111111",
    fontWeight: "700",
  },
});
