import React from "react";
import { connect } from "react-redux";
// const messages = [{
//     content: 'Hey',
//     identity: 'John',
//     messageCreatedByMe: true,
// }, {
//     content: 'Hello',
//     identity: 'John',   
//     messageCreatedByMe: true,
// }, {
//     content: 'Hello John',
//     identity: 'Marek',
//     messageCreatedByMe: false,
// }, {
//     content: 'How are you?',
//     identity: 'Anna',
//     messageCreatedByMe: false,
// }];

const Message = ({author, content, sameAuthor, messageCreatedByMe}) => {
    const alignClass = messageCreatedByMe ? 'message_align_right' : 'message_align_left';
    const authorText = messageCreatedByMe ? 'You' : author;

    const contentAdditionalStyles = messageCreatedByMe ? "message_right_styles": "message_left_styles";

    return (
        <div className={`message_container ${alignClass}`}>
            {!sameAuthor && <p className="message_title">{authorText }</p>}
            <p className={`message_content ${contentAdditionalStyles}`}>{content}</p>
        </div>
    )
}

const Messages = ({userId, messages}) => {

    //make messages_container auto scroll to bottom when overflow

    const container = document.querySelector('.messages_container');

    // Function to scroll the div to the bottom
    function scrollToBottom() {
        container.scrollTop = container.scrollHeight;
    }
    if (container){
    // Call the scrollToBottom function whenever the div content changes
    container.addEventListener('DOMSubtreeModified', scrollToBottom);

    // Call the scrollToBottom function initially to scroll to the bottom
    scrollToBottom();
    }
    return <div className="messages_container" >
        {messages.map((message, index) => {
            const sameAuthor = index > 0 && messages[index - 1].userId === message.userId;
            const messageCreatedByMe = userId === message.userId ? true: false;
            return (
                <Message
                key={`${message.content}${index}`} 
                author={message.identity}
                content={message.content}
                sameAuthor={sameAuthor}
                messageCreatedByMe = {messageCreatedByMe}
                />
            )
        })}
    </div>
}
const mapStoreStateToProps = (state) => {
    return {
      ...state,
    };
  };
  
export default  connect(mapStoreStateToProps)(Messages);