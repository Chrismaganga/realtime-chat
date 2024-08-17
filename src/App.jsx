import React, { useState } from 'react';
import logo from "./assets/react.svg";
import "./App.css";
import ChatWindow from './components/ChatWindow';

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {
  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([
      ...messages,
      { username: currentUser.username, text: newMessage },
    ]);
    setNewMessage("");
  };

  const isDisabled = newMessage.trim() === "";

  // Toggle current user between Amy and John
  const toggleUser = () => {
    setCurrentUser(currentUser.username === "Amy" ? users[1] : users[0]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <button className="btn toggle-user" onClick={toggleUser}>
        Switch User (Current: {currentUser.username})
      </button>
      <div className="container">
        {users.map(user => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            currentUser={currentUser}
            newMessage={newMessage}
            onMessageChange={setNewMessage}
            onSendMessage={handleSendMessage}
            isDisabled={isDisabled}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
