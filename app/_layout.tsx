import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { CartProvider } from "@/components/context/CartContext";
import { OrderProvider } from "@/components/context/OrderContext";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    card: "#FFFFFF",
    text: "#000000",
    border: "#E5E5E5",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={AppTheme}>
      <CartProvider>
        <OrderProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#FFFFFF" },
            }}
          />
        </OrderProvider>
      </CartProvider>

      <StatusBar style="dark" backgroundColor="#FFFFFF" />
    </ThemeProvider>
  );
}
