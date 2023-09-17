"use client";
// components/ChatWidget.js

import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatWidget.module.css";
import darkModeStyles from "./DarkMode.module.css"; // Import your dark mode CSS module

const ChatWidget = ({
  chat,
  customerId,
  sendMessage,
  messages,
  setMessages,
}) => {
  // const [messages, setMessages] = useState([
  //   { text: "This is Joseph. How May I help you?", sender: "agent" },
  //   {
  //     text: "I'm Martin, I need help with this LiveChat APIs.",
  //     sender: "user",
  //   },
  //   {
  //     text: "It's good to see you Martin, What help do you need with the API? I can share the link...",
  //     sender: "agent",
  //   },
  // ]);
  const [newMessage, setNewMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    // Check for dark mode preference on initial load
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const messageId = `${Math.random() * 1000}`;
      sendMessage(chat.id, messageId, newMessage);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const containerClass = isDarkMode
    ? `${styles["agent-screen"]} ${darkModeStyles["dark-mode"]}`
    : styles["agent-screen"];

  const widgetContainerClass = isDarkMode
    ? `${styles["chat-widget"]} ${darkModeStyles["dark-mode-widget"]}`
    : styles["chat-widget"];
  const messageContainerClass = isDarkMode
    ? `${styles["chat-messages"]} ${darkModeStyles["dark-mode-widget"]}`
    : styles["chat-messages"];

  return (
    <div className={widgetContainerClass}>
      <div className={styles["chat-header"]}>
        <h2>Chat Widget</h2>
      </div>
      <div className={messageContainerClass} ref={chatMessagesRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles["chat-message"]} ${styles[message.sender]}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles["chat-input"]}>
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

export default ChatWidget;
