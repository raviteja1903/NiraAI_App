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

const initialMessages = [
  {
    id: "1",
    text: "Hello 👋 How can I help you today?",
    sender: "agent",
    time: "10:30 AM",
  },
  {
    id: "2",
    text: "I need help with my Alphiecoin rewards",
    sender: "user",
    time: "10:31 AM",
  },
];

export default function LiveChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: input,
        sender: "user",
        time: "Now",
      },
    ]);
    setInput("");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Live Chat</Text>
            <Text style={styles.headerSub}>Support is online</Text>
          </View>
        </View>

        {/* ================= CHAT LIST ================= */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatArea}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const isUser = item.sender === "user";

            return (
              <View
                style={[
                  styles.messageRow,
                  isUser
                    ? { justifyContent: "flex-end" }
                    : { justifyContent: "flex-start" },
                ]}
              >
                {/* Agent Avatar */}
                {!isUser && (
                  <Image
                    source={require("../../assets/images/consumerCare.png")}
                    style={styles.avatar}
                  />
                )}

                {/* Message Bubble */}
                <View
                  style={[
                    styles.messageBubble,
                    isUser ? styles.userBubble : styles.agentBubble,
                  ]}
                >
                  <Text
                    style={[styles.messageText, isUser && { color: "#FFF" }]}
                  >
                    {item.text}
                  </Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>

                {/* User Avatar */}
                {isUser && (
                  <Image
                    source={{
                      uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png",
                    }}
                    style={styles.avatarImg}
                  />
                )}
              </View>
            );
          }}
        />

        {/* ================= INPUT ================= */}
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Type your message..."
            value={input}
            onChangeText={setInput}
            style={styles.input}
            placeholderTextColor="#999"
          />

          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Ionicons name="send" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  container: {
    flex: 1,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  headerCenter: {
    flex: 1,
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  headerSub: {
    fontSize: 11,
    color: "#10B981",
    marginTop: 2,
  },

  /* CHAT */
  chatArea: {
    padding: 14,
    paddingBottom: 20,
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 6,
    backgroundColor: "#EEE",
  },

  avatarImg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginLeft: 6,
    backgroundColor: "#EEE",
  },

  messageBubble: {
    maxWidth: "70%",
    padding: 12,
    borderRadius: 16,
  },

  agentBubble: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 6,
  },

  userBubble: {
    backgroundColor: "#000",
    borderTopRightRadius: 6,
  },

  messageText: {
    fontSize: 14,
    color: "#000",
  },

  time: {
    fontSize: 10,
    color: "#888",
    marginTop: 4,
    alignSelf: "flex-end",
  },

  /* INPUT */
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  input: {
    flex: 1,
    backgroundColor: "#F1F2F6",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
  },

  sendBtn: {
    marginLeft: 10,
    backgroundColor: "#000",
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },
});
