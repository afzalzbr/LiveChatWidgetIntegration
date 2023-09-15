"use client";

// components/AgentScreen.js
import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";
import ChatScreen from "./ChatScreen";
import styles from "./AgentScreen.module.css";
import darkModeStyles from "./DarkMode.module.css"; // Import your dark mode CSS module

const AgentScreen = ({ chats }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference on initial load
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const handleSendMessage = (message) => {
    // Implement logic to send a message to the selected user
  };

  const agentScreenClass = isDarkMode
    ? `${styles["agent-screen"]} ${darkModeStyles["dark-mode-agent-screen"]}`
    : styles["agent-screen"];

  return (
    <div className={agentScreenClass}>
      <ChatList
        isDarkMode={isDarkMode}
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      {activeChat ? (
        <ChatScreen
          activeChat={activeChat}
          messages={activeChat.messages}
          onSendMessage={handleSendMessage}
          isDarkMode={isDarkMode}
        />
      ) : (
        <p className={styles["empty-chat"]}>Select a chat to start</p>
      )}
    </div>
  );
};

export default AgentScreen;
