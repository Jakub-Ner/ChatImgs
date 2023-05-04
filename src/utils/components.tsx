import { Image, ScrollView, Text, View } from "react-native";
import React from "react";

import { buttonStyles, chatBubbleStyles, headerStyles } from "./styles";
import { CHAT, CHAT_MESSAGE } from "./chatType";


export function Header(props: { title: string }): JSX.Element {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{props.title}</Text>
    </View>
  )
}

export function ChatView(props: { chat: CHAT }): JSX.Element {
  if (!props.chat) {
    return (<></>);
  }
  return (
    <ScrollView contentContainerStyle={chatBubbleStyles.chatContainer}>
      {props.chat.map(ChatBubble)}
    </ScrollView>);
}


function ChatBubble(props: CHAT_MESSAGE): JSX.Element {
  const {id, message, role} = props;
  console.debug("id", id, "message", message, "role", role)
  if (role === "bot") {
    if (message.startsWith("http")) {
      return (
        <View style={chatBubbleStyles.botMessageContainer} key={id}>
          <Image source={{uri: message}} style={{width: 100, height: 100}} key={id}/>
        </View>
      )
    } else {
      return (
        <View style={chatBubbleStyles.botMessageContainer} key={id}>
          <Text style={chatBubbleStyles.messageText} key={id}>{message}</Text>
        </View>
      )
    }
  }
  return (
    <View style={chatBubbleStyles.userMessageContainer} key={id}>
      <Text style={chatBubbleStyles.messageText} key={id}>{message}</Text>
    </View>
  )
}

export function LoadingView() {
  console.log("Loading")
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={buttonStyles.container}>
        <Text style={buttonStyles.text}>Loading...</Text>
      </View>
    </View>
  )
}
