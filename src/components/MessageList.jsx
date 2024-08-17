import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ messages, user }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === user.username
              ? "message sender"
              : "message recipient"
          }
          style={{
            color: message.username === user.username ? 'green' : 'blue'
          }}
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
};
MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired
};
export default MessageList;
