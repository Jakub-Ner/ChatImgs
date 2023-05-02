import { useEffect, useState } from 'react';
import Replicate from "replicate";

import TOKEN from '../utils/secrets'
import { CHAT, CHAT_MESSAGE } from "../utils/chatType";

const replicate = new Replicate({
  auth: TOKEN,
});


function useStableDiffusion(): [CHAT, (prompt: string) => void] {
  const [chat, setImg] = useState<CHAT>([]);

  const addImg = (prompt: string): void => {
    getBotResponse(prompt).then((message) => {
      setImg([...chat, message]);
      console.log("message:", message)
    }).catch((error) => {
      console.error("error:", error)
    });
  };

  useEffect(() => addImg("Imagination, creative, abstract, digital art"), []);

  return [chat, addImg];
}

async function getBotResponse(prompt: string): Promise<CHAT_MESSAGE> {
  const img = await getImg(prompt);
  return {
    id: 0,
    messages: JSON.stringify(img),
    role: "bot"
  }
}

async function getImg(prompt: string = "Postman standing in front of a car.") {
  console.log("starting generating...")
  return await replicate.run(
    "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
    {
      input: {
        prompt: prompt,
      }
    });
}

export { useStableDiffusion };
