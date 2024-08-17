import React from 'react';
import PropTypes from 'prop-types';

const MessageForm = ({ newMessage, onMessageChange, onSendMessage, isDisabled }) => {
  return (
    <div>
      <form
        className="input-group"
        onSubmit={(e) => {
          e.preventDefault();
          onSendMessage();
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={newMessage}
          onChange={(e) => onMessageChange(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn submit-button"
            type="submit"
            disabled={isDisabled}
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};
MessageForm.propTypes = {
  newMessage: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
};
export default MessageForm;
