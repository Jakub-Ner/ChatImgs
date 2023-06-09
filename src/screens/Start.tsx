import { Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useNavigate } from "react-router-native";

import { buttonStyles } from "../utils/styles";
import { Header } from '../utils/components';
import { closeApp, useBackAction } from "../hooks/useBackAction";


type Props = {}

export default function StartScreen(props: Props) {
  const navigate = useNavigate()

  useBackAction(closeApp);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Header title={"ChatImgs"}></Header>
      <StartSelector onPress={() => navigate("/chat", {})}></StartSelector>
    </View>
  )
}


const StartSelector = (props: { onPress: () => void }) => {
  return (
    <TouchableHighlight
      style={buttonStyles.container}
      {...buttonStyles.highlight}
      onPress={() => props.onPress()}
    >
      <Text style={buttonStyles.text}>Let's imagine!</Text>

    </TouchableHighlight>

  )
}
