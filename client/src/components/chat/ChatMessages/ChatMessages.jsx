import React from 'react';
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatMessages = ({messages, messageIsLoad}) => {

    return (
        <>
            {messages.map((message, index) => (
                <ChatMessage
                    key={index}
                    role={message.role}
                    content={message.content}
                    messageIsLoad={messageIsLoad}
                />
            ))}
        </>
    );
};

export default ChatMessages;