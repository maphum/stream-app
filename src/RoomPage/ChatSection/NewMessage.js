import React, {useState} from "react";
import SendMessageButton from '../../resources/images/sendMessageButton.svg'
import { connect } from "react-redux";
import * as wss from '../../utils/wss'
const NewMessage = ({roomId, identity, userId}) => {
    const [message, setMessage] = useState('');
    const handleTextChange = event => {
        setMessage(event.target.value);
    }

    const handleKeyPressed = event => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    }

    const sendMessage = () => {
        if (message.trim() !== '') {
            console.log(message);
            wss.sendMessageUsingSocket({
                content: message,
                identity,
                userId,
            }, roomId);
            setMessage('');
        }
    }

    return (
        <div className="new_message_container">
            <input 
                className="new_message_input"
                value={message}
                onChange={handleTextChange}
                placeholder="Type your message..."
                type='text'
                onKeyDown={handleKeyPressed}
            />
            <img alt=""
                className="new_message_button"
                src={SendMessageButton}
                onClick={sendMessage}
            />
        </div>
    )
}
const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
  };
  
export default  connect(mapStoreStateToProps)(NewMessage);