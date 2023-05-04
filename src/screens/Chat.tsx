import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

import { backAlert, useBackAction } from "../hooks/useBackAction";
import { useStableDiffusion } from "../hooks/useStableDiffusion";
import { CHAT } from "../utils/chatType";
import { ChatView, Header, LoadingView } from "../utils/components";
import { buttonStyles, textInputStyles } from "../utils/styles";

type Props = {}

export default function ChatScreen(props: Props) {
  const [text, setText] = useState("");

  const navigate = useNavigate()
  const [chat, addImg, isLoading] = useStableDiffusion()

  useBackAction(() => backAlert("back to starting page", () => navigate("/", {})));

  const onChangeText = (text: string) => {
    setText(text)
  }
  const onSend = () => {
    if (text === "") {
      return
    }
    addImg(text)
    setText("")
  }
  return (
    <View style={{minHeight: "100%", position: "relative"}}>
      <Header title={"Chat"}></Header>

      {isLoading ? <LoadingView/>
        : <ChatMainScreen chat={chat} text={text} onSend={onSend} onChangeText={onChangeText}/>}
    </View>
  )
}

function ChatMainScreen(props: {
  chat: CHAT,
  text: string,
  onSend: () => void,
  onChangeText: (text: string) => void
}): JSX.Element {
  const {chat, text, onSend, onChangeText} = props;

  return (
    <>
      <View style={{flex: 1}}>
        <ChatView chat={chat}/>
      </View>

      <View style={textInputStyles.container}>
        <TextInput style={textInputStyles.textInput}
                   value={text}
                   onChangeText={onChangeText}
                   placeholder={"Let's imagine..."}
                   placeholderTextColor={textInputStyles.textInput.color}
        ></TextInput>

        <TouchableHighlight
          style={textInputStyles.button}
          {...buttonStyles.highlight}
          onPress={() => onSend()}>
          <Text style={textInputStyles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>
    </>
  )
}
