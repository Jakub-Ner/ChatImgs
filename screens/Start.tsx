import { Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

import { buttonStyles, styles } from "../styles";
import Header from '../components';
import { useNavigate } from "react-router-native";

type Props = {}

export default function StartScreen(props: Props) {
  const navigate = useNavigate()

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Header title={"StartScreen"}></Header>
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
