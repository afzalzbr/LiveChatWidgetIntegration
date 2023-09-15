// pages/agent.js
import React from "react";
import AgentScreen from "../../components/AgentScreen";

const agentChats = [
  // Initialize your agent chats here with user information and messages
  {
    id: 1,
    userName: "User1",
    messages: [
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
    ],
  },
  {
    id: 2,
    userName: "User2",
    messages: [
      {
        text: "This is message, This is message,This is message",
        sender: "user",
      },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message, This is message.", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
      { text: "This is message", sender: "user" },
      { text: "This is message", sender: "agent" },
    ],
  },
  // Add more user chats as needed
];

const AgentPage = () => {
  return (
    <div>
      <h1>Agent Chat Screen</h1>
      <AgentScreen chats={agentChats} />
    </div>
  );
};

export default AgentPage;
