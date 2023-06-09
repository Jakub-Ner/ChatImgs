import { useEffect, useState } from 'react';
import Replicate from "replicate";

import { CHAT, CHAT_MESSAGE } from "../utils/chatType";

const replicate = new Replicate({
  auth: require('../utils/secrets.json').replicateToken,
});


function useStableDiffusion(): [CHAT, ((prompt: string) => void), boolean] {
  const [isLoading, setIsLoading] = useState(true);
  const [chat, setImg] = useState<CHAT>([]);

  const addImg = async (prompt: string): Promise<void> => {
    const userMsg: CHAT_MESSAGE = getUserResponse(prompt, chat.length);
    setImg((chat) => [...chat, userMsg]);

    await getBotResponse(prompt, chat.length + 1).then((botMsg) => {
      setImg((chat) => [...chat, botMsg]);
    }).catch((error) => {
      console.error("Adding image:", error.message)
    });
  };

  useEffect(() => {
    addImg("Imagination, creative, abstract, digital art").then(() => {
      setIsLoading(false)
    });
  }, []);

  return [chat, addImg, isLoading];
}

function getUserResponse(prompt: string, id: number): CHAT_MESSAGE {
  return {
    id: id,
    message: prompt,
    role: "user"
  }
}

async function getBotResponse(prompt: string, id: number): Promise<CHAT_MESSAGE> {
  const img = await getImg(prompt);
  return {
    id: id,
    message: JSON.stringify(img, null, 0).slice(2, -2),
    role: "bot"
  }
}

async function getImg(prompt: string = "Postman standing in front of a car.") {
  console.log("starting generating...")
  let response = "";
  try {
    return await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt: prompt,
        }
      });
  } catch (error) {
    console.error("Generating image:", error.message)
    response = "[Sorry, I couldn't generate an image for you.]"
  }
  return response
}

export { useStableDiffusion };
