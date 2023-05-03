import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import StartScreen from "./screens/Start";
import ChatScreen from "./screens/Chat";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<StartScreen/>}/>
        <Route path="/chat" element={<ChatScreen/>}/>
      </Routes>
    </NativeRouter>
  )
}
