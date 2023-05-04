import React from "react";

type CHAT_MESSAGE = {
  id: number,
  message: string,
  role: "bot" | "user"
}

type CHAT = CHAT_MESSAGE[]
export type { CHAT, CHAT_MESSAGE }
