import React, { useState } from "react";
import "../../public/css/chatbot.css";
import axios from "axios";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, SetInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    SetInput(e.target.value);
  };

  const handleSubmit = (e) => {
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    axios
      .post("http://127.0.0.1:5000/chat", { message: input })
      .then((response) => {
        const botReply = { sender: "bot", text: response.data.response };
        setMessages((prev) => [...prev, botReply]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="z-40">
      <button className={"chat_toggle"} onClick={handleClick}>
        <i class="fa-solid fa-robot"></i>
      </button>
      <div className={open ? "chatbot_window" : "hidden"}>
        <div className="chatbot_header">
          <div className="flex gap-3">
            <div className="ml-2">
              <i class="fa-solid fa-robot"></i>
            </div>
            <div>NewLifeAssist</div>
          </div>
          <button className="cursor-pointer" onClick={handleClick}>
            <i class="bx bx-x"></i>
          </button>
        </div>
        <div className="m-3 overflow-y-scroll h-80 scrollbar-hide" >
          {messages.map((msg, index) => (
            <div
              className={
                msg.sender === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              {msg.sender === "user" ? (
                <div key={index} className="user_chat">
                  {msg.text}
                </div>
              ) : (
                <div key={index} className="bot_chat">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="search_input">
          <input
            type="text"
            id="search"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 ml-2 border-white text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ask something ...."
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            className="font-black flex justify-center items-center mr-2"
          >
            <i class="bx bx-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
