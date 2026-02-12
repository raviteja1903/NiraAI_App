import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useRouter } from "expo-router";

export default function CameraScreen() {
  const router = useRouter();

  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] =
    useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          We need camera permission
        </Text>

        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo =
        await cameraRef.current.takePictureAsync();

      Alert.alert("Image Captured ✅");

      console.log("Photo URI:", photo?.uri);

       

      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing="front"
      />

      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={takePicture}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  camera: {
    flex: 1,
  },

  overlay: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
  },

  captureButton: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 4,
    borderColor: "#000000",
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  permissionText: {
    fontSize: 16,
    marginBottom: 20,
  },

  permissionButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },

  permissionButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
