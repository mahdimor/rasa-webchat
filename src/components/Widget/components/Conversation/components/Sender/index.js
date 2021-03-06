import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import send from 'assets/send_button.svg';
import './style.scss';

const Sender = ({ sendMessage, inputTextFieldHint, disabledInput, userInput }) => (userInput === 'hide' ? <div /> : (
  <form className="rw-sender" onSubmit={sendMessage}>
    <input type="text" className="rw-new-message" name="message" placeholder={inputTextFieldHint} disabled={disabledInput || userInput === 'disable'} autoFocus autoComplete="off" />
    <button type="submit" className="rw-send">
      <img src={send} className="rw-send-icon" alt="send" />
    </button>
  </form>));
const mapStateToProps = state => ({
  inputTextFieldHint: state.behavior.get('inputTextFieldHint'),
  userInput: state.metadata.get('userInput')
});

Sender.propTypes = {
  sendMessage: PropTypes.func,
  inputTextFieldHint: PropTypes.string,
  disabledInput: PropTypes.bool,
  userInput: PropTypes.string
};

export default connect(mapStateToProps)(Sender);
