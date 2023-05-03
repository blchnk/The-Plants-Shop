import React from 'react';
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatMessages = ({messages}) => {
    return (
        <>
            {messages.map((message, index) => (
                <ChatMessage
                    key={index}
                    author={message.author}
                    content={message.content}
                />
            ))}
        </>
    );
};

export default ChatMessages;