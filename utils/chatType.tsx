type CHAT_MESSAGE = {
  id: number,
  messages: string,
  role: "bot" | "user"
}

type CHAT = CHAT_MESSAGE[]

function displayChat(chat: CHAT | undefined): string {
  if (!chat) {
    return "";
  }
  return chat.map((message) => message.messages).join("\n");
}

export type { CHAT, CHAT_MESSAGE }
export { displayChat }
