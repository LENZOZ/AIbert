import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";



function ChatBot() {
  const [typing, setTyping] = useState(false);
  const { openai } = useContext(UserContext);
  const API_KEY = openai[1].api_key;
  const [messages, setMessages] = useState([
    {
      message: "Hola! Soy ChatBot, estoy aqui para ayudar!",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    //update our message state
    setMessages(newMessages);

    // set a typing indicator
    setTyping(true);
    //process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    //chatMessages { sender: "user" or "ChatGPT, message: "The message content here"}

    let apiMessage = chatMessages.map((messageObjet) => {
      let role = "";
      if (messageObjet.sender == "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObjet.message };
    });

    const systemMessage = {
      role: "system",
      content: "Habla como un profesor de matemáticas para alumnos de 15 años, solo textos de maximo 200 palabras",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessage],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
        "OpenAI-Organization": "org-WNDhkc2e7JNVsz2BDvvnm41F",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="h-[95%] w-full overflow-auto">
      <div className="overflow-hidden">
        <div className="overflow-scroll mx-2 ">
          <MainContainer className="border-none rounded-lg">
            <ChatContainer className="border-none">
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="ChatBot esta escribiendo..." />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                className="border-none"
                placeholder="Escribe el mensaje aqui"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
