import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import PropTypes from 'prop-types';

const ChatWindow = ({ user, messages, newMessage, onMessageChange, onSendMessage, isDisabled }) => {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name">{user.username}</div>
      <MessageList messages={messages} user={user} />
      <MessageForm
        newMessage={newMessage}
        onMessageChange={onMessageChange}
        onSendMessage={onSendMessage}
        isDisabled={isDisabled}
      />
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  newMessage: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};
export default ChatWindow;
