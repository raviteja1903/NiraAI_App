import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useRef, useState } from "react";
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
  sender: "user" | "bot";
  time: string;
};


export default function ChatScreen() {
  const [text, setText] = useState("");
  const flatListRef = useRef<FlatList>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi, welcome 👋\nHow can I help you today?",
      sender: "bot",
      time: "10:41 AM",
    },
  ]);
 
  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);
 
  const sendMessage = () => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setText("");
  };
 
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const newMessage: Message = {
        id: Date.now().toString(),
        image: result.assets[0].uri,
        sender: "user",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, newMessage]);
    }
  };
 
  const renderItem = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageRow,
        item.sender === "user" ? styles.rowRight : styles.rowLeft,
      ]}
    >
      {item.sender === "bot" && (
        <Image
          source={require("../../assets/images/nira_logo.png")}
          style={styles.avatar}
        />
      )}

      <View
        style={[
          styles.bubble,
          item.sender === "user" ? styles.userBubble : styles.botBubble,
        ]}
      >
        {item.text && (
          <Text
            style={[
              styles.messageText,
              item.sender === "user" && { color: "#FFF" },
            ]}
          >
            {item.text}
          </Text>
        )}

        {item.image && (
          <Image source={{ uri: item.image }} style={styles.chatImage} />
        )}

        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
      >
      
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.chat}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />

        {/* INPUT BAR */}
        <View style={styles.inputBar}>
          {/* LEFT ICONS */}
          <View style={styles.leftIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="mic-outline" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="attach-outline" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={pickImage}>
              <Ionicons name="image-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
 
          <TextInput
            placeholder="Type a message"
            value={text}
            onChangeText={setText}
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
 

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  container: {
    flex: 1,
  },

  chat: {
    padding: 16,
    paddingBottom: 10,
  },

  messageRow: {
    flexDirection: "row",
    marginBottom: 14,
    alignItems: "flex-end",
  },

  rowLeft: {
    justifyContent: "flex-start",
  },

  rowRight: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },

  bubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 14,
  },

  botBubble: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 4,
  },

  userBubble: {
    backgroundColor: "#000",
    borderTopRightRadius: 4,
  },

  messageText: {
    fontSize: 14,
    color: "#111",
  },

  chatImage: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginTop: 6,
  },

  time: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
    alignSelf: "flex-end",
  },

  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },

  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 6,
  },

  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },

  input: {
    flex: 1,
    height: 44,
    backgroundColor: "#F1F1F1",
    borderRadius: 22,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#111",
  },

  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E91E63",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
