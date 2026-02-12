// import { Link } from 'expo-router';
// import { StyleSheet } from 'react-native';

// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';

// export default function ModalScreen() {
//   return (
//     <ThemedView style={styles.container}>
//       <ThemedText type="title">This is a modal</ThemedText>
//       <Link href="/" dismissTo style={styles.link}>
//         <ThemedText type="link">Go to home screen</ThemedText>
//       </Link>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   link: {
//     marginTop: 15,
//     paddingVertical: 15,
//   },
// });
import { Link } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a modal</Text>

      <Link href="/" dismissTo style={styles.link}>
        <Text style={styles.linkText}>Go to home screen</Text>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",  
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
  },

  link: {
    marginTop: 15,
    paddingVertical: 15,
  },

  linkText: {
    color: "#007AFF",
    fontSize: 16,
  },
});
