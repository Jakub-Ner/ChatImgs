import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type CHAT_MESSAGE = {
  id: number,
  message: string,
  role: "bot" | "user"
}

type CHAT = CHAT_MESSAGE[]
export type { CHAT, CHAT_MESSAGE }

function chatMessage(props: CHAT_MESSAGE): JSX.Element {
  const {id, message, role} = props;
  if (role === "bot") {
    return (
      <View style={styles.botMessageContainer}>
        <Image source={{uri: message}} key={id} style={{width: 100, height: 100}}/>
      </View>
    )
  }
  return (
    <View style={styles.userMessageContainer}>
      <Text key={id} style={styles.userMessageText}>{message}</Text>
    </View>
  )
}

function displayChat(chat: CHAT | undefined): JSX.Element {
  if (!chat) {
    return (<></>);
  }

  return (
    <ScrollView contentContainerStyle={styles.chatContainer}>
      {chat.map(chatMessage)}
    </ScrollView>);
}

export { displayChat }


const styles = StyleSheet.create({
  chatContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'lightblue', // <- convert to general theme
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
    padding: 10,
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'lightgray', // <- convert to general theme
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
    padding: 10,
  },
  userMessageText: {
    color: 'black', // <- convert to general theme
    fontSize: 16,
  },
});
