// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import { Formik } from "formik";
// import * as Yup from "yup";

// const OTPSchema = Yup.object().shape({
//   otp: Yup.string().length(6, "6 digits required").required("OTP required"),
// });

// export default function OTPScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Verify OTP</Text>

//       <Formik
//         initialValues={{ otp: "" }}
//         validationSchema={OTPSchema}
//         onSubmit={() => router.replace("/")}
//       >
//         {({ handleChange, handleSubmit, values, errors }) => (
//           <>
//             <TextInput
//               placeholder="Enter OTP"
//               keyboardType="numeric"
//               maxLength={6}
//               style={styles.input}
//               onChangeText={handleChange("otp")}
//               value={values.otp}
//             />
//             {errors.otp && <Text style={styles.error}>{errors.otp}</Text>}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
//               <Text style={styles.buttonText}>Verify</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </Formik>
//     </View>
//   );
// }
//  import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     paddingHorizontal: 24,
//     justifyContent: "center",
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: "600",
//     color: "#1A1A1A",
//     textAlign: "center",
//     marginBottom: 8,
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#777777",
//     textAlign: "center",
//     marginBottom: 32,
//   },

//   input: {
//     height: 56,
//     borderWidth: 1,
//     borderColor: "#E5E5E5",
//     borderRadius: 14,
//     paddingHorizontal: 16,
//     fontSize: 18,
//     letterSpacing: 6,          
//     textAlign: "center",
//     backgroundColor: "#FAFAFA",
//     marginBottom: 8,
//   },

//   error: {
//     color: "#D9534F",
//     fontSize: 12,
//     textAlign: "center",
//     marginBottom: 12,
//   },

//   button: {
//     height: 56,
//     borderRadius: 28,
//     backgroundColor: "#000000",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 16,
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   resendText: {
//     textAlign: "center",
//     marginTop: 20,
//     color: "#555555",
//     fontSize: 14,
//   },

//   resendLink: {
//     color: "#000000",
//     fontWeight: "600",
//   },
// });
