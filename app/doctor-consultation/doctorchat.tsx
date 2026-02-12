import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Message = {
  id: string;
  text?: string;
  image?: string;
  sender: "doctor" | "user";
};

export default function DoctorChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Good morning! How can I help you today?",
      sender: "doctor",
    },
  ]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), text, sender: "user" },
    ]);
    setText("");
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";

    return (
      <View
        style={[styles.messageContainer, isUser ? styles.right : styles.left]}
      >
        <View
          style={[
            styles.bubble,
            isUser ? styles.userBubble : styles.doctorBubble,
          ]}
        >
          {item.text && (
            <Text style={[styles.messageText, isUser && styles.userText]}>
              {item.text}
            </Text>
          )}

          {item.image && (
            <Image source={{ uri: item.image }} style={styles.imageMessage} />
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
         
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>

          <View style={styles.headerInfo}>
            <Text style={styles.doctorName}>Dr. Sabreena Khan</Text>
            <Text style={styles.status}>Active now</Text>
          </View>

          <View style={styles.headerActions}>
            <Ionicons name="call-outline" size={22} />
            <Ionicons name="videocam-outline" size={22} />
          </View>
        </View>

      
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 16 }}
          keyboardShouldPersistTaps="handled"
        />
 
        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Ionicons name="attach-outline" size={22} color="#777" />
          </TouchableOpacity>

          <TextInput
            placeholder="Type something..."
            value={text}
            onChangeText={setText}
            style={styles.input}
          />

          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={22} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: "#F7F7F8",
  },

   
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E5E5E5",
  },

  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },

  doctorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  status: {
    fontSize: 12,
    color: "#10A37F",  
    marginTop: 2,
  },

  headerActions: {
    flexDirection: "row",
    gap: 14,
  },

  
  messageContainer: {
    marginVertical: 6,
    flexDirection: "row",
  },

  left: {
    justifyContent: "flex-start",
  },

  right: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },

  bubble: {
    maxWidth: "78%",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
  },

  doctorBubble: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },

  userBubble: {
    backgroundColor: "#10A37F",
    borderTopRightRadius: 6,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#111",
  },

  userText: {
    color: "#FFFFFF",
  },

  imageMessage: {
    width: 180,
    height: 180,
    borderRadius: 14,
    marginTop: 6,
  },

  
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderTopColor: "#E5E5E5",
  },

  input: {
    flex: 1,
    backgroundColor: "#F1F1F2",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    marginHorizontal: 10,
    color: "#111",
  },
});
