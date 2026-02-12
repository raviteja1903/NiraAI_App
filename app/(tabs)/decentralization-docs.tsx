import BottomNav from "@/components/home/BottomNav";
import Header from "@/components/home/Header";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function AlphieL1Screen() {
  return (
    <>
      <View style={styles.container}>
        <BackgroundDecorations />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <AnimatedHero />
          <AnimatedSection delay={200}>
            <SectionTitle title="Core Functions" />
            <AnimatedGrid delay={300}>
              <GlassCard
                icon="shield-checkmark-outline"
                title="Data Verifiability"
                desc="Every AI interaction is immutably recorded."
                delay={0}
              />
              <GlassCard
                icon="sync-outline"
                title="Synchronization"
                desc="All nodes share a single source of truth."
                delay={100}
              />
              <GlassCard
                icon="key-outline"
                title="Ownership Tracking"
                desc="Users control data via cryptographic keys."
                delay={200}
              />
              <GlassCard
                icon="layers-outline"
                title="Lightweight Design"
                desc="Signatures on-chain. Heavy AI data off-chain."
                delay={300}
              />
            </AnimatedGrid>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <SectionTitle title="How It Works" />
            <AnimatedFlow />
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <SectionTitle title="ALP Token Utility" />
            <AnimatedGrid delay={700}>
              <GlassCard
                icon="checkmark-done-outline"
                title="Verification Fees"
                desc="Anchor interactions on-chain."
                delay={0}
              />
              <GlassCard
                icon="server-outline"
                title="Node Rewards"
                desc="Incentives for hosting & relaying data."
                delay={100}
              />
              <GlassCard
                icon="star-outline"
                title="Premium AI Access"
                desc="Unlock advanced biosensor analysis."
                delay={200}
              />
              <GlassCard
                icon="people-outline"
                title="Governance"
                desc="Vote on protocol upgrades."
                delay={300}
              />
            </AnimatedGrid>
          </AnimatedSection>

          <View style={{ height: 60 }} />
        </ScrollView>
      </View>
      <BottomNav />
    </>
  );
}

const BackgroundDecorations = () => {
  const pulse1 = useRef(new Animated.Value(1)).current;
  const pulse2 = useRef(new Animated.Value(1)).current;
  const pulse3 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const createPulse = (animValue: Animated.Value, duration: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: 1.2,
            duration: duration,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 1,
            duration: duration,
            useNativeDriver: true,
          }),
        ]),
      );
    };

    const anim1 = createPulse(pulse1, 4000);
    const anim2 = createPulse(pulse2, 5000);
    const anim3 = createPulse(pulse3, 6000);

    anim1.start();
    anim2.start();
    anim3.start();

    return () => {
      anim1.stop();
      anim2.stop();
      anim3.stop();
    };
  }, []);

  return (
    <View style={styles.decorationsContainer}>
      <Animated.View
        style={[
          styles.circle,
          {
            width: width * 0.6,
            height: width * 0.6,
            backgroundColor: "rgba(124, 58, 237, 0.08)",
            top: -width * 0.2,
            right: -width * 0.15,
            transform: [{ scale: pulse1 }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            width: width * 0.5,
            height: width * 0.5,
            backgroundColor: "rgba(59, 130, 246, 0.06)",
            top: height * 0.3,
            left: -width * 0.2,
            transform: [{ scale: pulse2 }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            width: width * 0.45,
            height: width * 0.45,
            backgroundColor: "rgba(168, 85, 247, 0.07)",
            top: height * 0.6,
            right: -width * 0.1,
            transform: [{ scale: pulse3 }],
          },
        ]}
      />
    </View>
  );
};

const AnimatedHero = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.hero,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Text style={styles.title}>Alphie L1 — Trust & Verifiability Layer</Text>
      <Text style={styles.subtitle}>
        A lightweight ledger securing AI interactions, healthcare data, and
        ownership.
      </Text>

      <View style={styles.badgeRow}>
        <AnimatedBadge text="Signatures" delay={200} />
        <AnimatedBadge text="Hashes" delay={300} />
        <AnimatedBadge text="Immutable Logs" delay={400} />
      </View>
    </Animated.View>
  );
};

const AnimatedBadge = ({ text, delay }: { text: string; delay: number }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      delay,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[styles.badge, { transform: [{ scale: scaleAnim }] }]}
    >
      <Text style={styles.badgeText}>{text}</Text>
    </Animated.View>
  );
};

const AnimatedSection = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
  );
};

const AnimatedGrid = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.grid, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};

const SectionTitle = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const GlassCard = ({
  icon,
  title,
  desc,
  delay,
}: {
  icon: any;
  title: string;
  desc: string;
  delay: number;
}) => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <Ionicons name={icon} size={26} color="#7C3AED" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>
    </Animated.View>
  );
};

const AnimatedFlow = () => {
  const items = [
    "User / AI Agent",
    "Sign + Hash Data",
    "Alphie L1 Ledger",
    "IPFS Storage",
    "Verification Proof",
  ];

  return (
    <View style={styles.flowContainer}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <AnimatedFlowItem text={item} delay={index * 100} />
          {index < items.length - 1 && <FlowArrow delay={index * 100 + 50} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const AnimatedFlowItem = ({ text, delay }: { text: string; delay: number }) => {
  const slideAnim = useRef(new Animated.Value(20)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        delay,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.flowItem,
        {
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <Text style={styles.flowText}>{text}</Text>
    </Animated.View>
  );
};

const FlowArrow = ({ delay }: { delay: number }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );

    setTimeout(() => {
      bounceAnimation.start();
    }, delay + 300);

    return () => {
      bounceAnimation.stop();
    };
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: bounceAnim }],
      }}
    >
      <Ionicons
        name="arrow-down-outline"
        size={20}
        color="#6B7280"
        style={{ marginVertical: 6 }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  decorationsContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  circle: {
    position: "absolute",
    borderRadius: 9999,
  },

  hero: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },

  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },

  badge: {
    backgroundColor: "rgba(124,58,237,0.12)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },

  badgeText: {
    color: "#7C3AED",
    fontSize: 12,
    fontWeight: "600",
  },

  sectionTitle: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 20,
    marginBottom: 16,
    marginTop: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  card: {
    width: width / 2 - 30,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  cardTitle: {
    color: "#111827",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },

  cardDesc: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 6,
    lineHeight: 18,
  },

  flowContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  flowItem: {
    backgroundColor: "#F9FAFB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  flowText: {
    color: "#111827",
    fontSize: 13,
  },
});
