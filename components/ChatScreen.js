"use client";
// components/ChatScreen.js
import React, { useState } from "react";
import styles from "./AgentScreen.module.css";
import darkModeStyles from "./DarkMode.module.css"; // Import your dark mode CSS module

const ChatScreen = ({ activeChat, messages, onSendMessage, isDarkMode }) => {
  const [newMessage, setNewMessage] = useState("");

  const chatScreenContainerClass = isDarkMode
    ? `${styles["chat-screen"]} ${darkModeStyles["dark-mode-chat-screen"]}`
    : styles["chat-screen"];

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className={chatScreenContainerClass}>
      <h2>Chat with {activeChat.userName}</h2>
      <div className={`${styles["chat-messages"]}`}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles["chat-message"]} ${styles[message.sender]}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={`${styles["chat-input"]}`}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatScreen;
