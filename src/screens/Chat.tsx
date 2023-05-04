import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

import { Header, ChatView } from "../utils/components";
import { backAlert, useBackAction } from "../hooks/useBackAction";
import { buttonStyles, styles, textInputStyles } from "../utils/styles";
import { useStableDiffusion } from "../hooks/useStableDiffusion";

type Props = {}

export default function ChatScreen(props: Props) {
  const [text, setText] = useState("");

  const navigate = useNavigate()
  const [chat, addImg] = useStableDiffusion()

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

      <ChatView chat={chat}/>

      <View style={textInputStyles.container}>
        <TextInput style={textInputStyles.textInput}
                   value={text}
                   onChangeText={onChangeText}
                   placeholder={"Let's imagine..."}
                   placeholderTextColor={styles.theme.accentColor}
        ></TextInput>

        <TouchableHighlight
          style={textInputStyles.button}
          {...buttonStyles.highlight}
          onPress={() => onSend()}>
          <Text style={textInputStyles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

