import { Text, View } from "react-native";
import React from "react";

import { headerStyles } from "./styles";


export default function Header(props: { title: string }) {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{props.title}</Text>
    </View>
  )
};
