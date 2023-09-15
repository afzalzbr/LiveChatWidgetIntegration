// components/ChatList.js
import styles from "./AgentScreen.module.css";
import darkModeStyles from "./DarkMode.module.css"; // Import your dark mode CSS module

const ChatList = ({ chats, setActiveChat, activeChat, isDarkMode }) => {
  const chatListContainerClass = isDarkMode
    ? `${styles["chat-list"]} ${darkModeStyles["dark-mode-chat-list"]}`
    : styles["chat-list"];

  return (
    <div className={chatListContainerClass}>
      <h2>Active Chats</h2>
      <ul>
        {chats.map((chat, index) => (
          <li
            key={index}
            className={
              chat?.id === activeChat?.id ? styles["selected-chat"] : ""
            }
            onClick={() => setActiveChat(chat)}
          >
            {chat.userName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
