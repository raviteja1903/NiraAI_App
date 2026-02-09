import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import BitcoinHistoryScreen from "./BitcoinHistoryScreen";
 

const screenWidth = Dimensions.get("window").width;

export default function BitcoinGraphScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Alphiecoin Price</Text>
        <Text style={styles.subTitle}>Last 7 Days</Text>

        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [42000, 43500, 41000, 45000, 47000, 46500, 48000],
              },
            ],
          }}
          width={screenWidth - 32}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#FFFFFF",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(247, 147, 26, ${opacity})`,
            labelColor: () => "#666",
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: "#F7931A",
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
      <BitcoinHistoryScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  subTitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 12,
  },

  chart: {
    borderRadius: 16,
  },
});
