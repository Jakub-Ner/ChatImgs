import React, { useState } from "react";
import { useNavigate } from "react-router-native";
import { Text, TextInput, TouchableHighlight, View } from "react-native";

import Header from "../components";
import { backAlert, useBackAction } from "../hooks/useBackAction";
import { buttonStyles, styles, textInputStyles } from "../styles";

type Props = {}

export default function ChatScreen(props: Props) {
  const [text, setText] = useState("");

  const onChangeText = (text: string) => {
    setText(text)
  }
  const navigate = useNavigate()

  useBackAction(() => backAlert("back to starting page", () => navigate("/", {})));

  return (
    <View style={{minHeight: "100%", position: "relative"}}>
      <Header title={"Chat"}></Header>


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
          onPress={() => onChangeText(text)}>
          <Text style={textInputStyles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>

    </View>
  )
}

