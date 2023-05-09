import React, {useEffect} from 'react';
import ChatMessage from "../ChatMessage/ChatMessage";
import s from "../ChatMessages/ChatMessages.module.scss";
import Loader from "../../loader/Loader";

const ChatMessages = ({messages}) => {

    return (
        <>
            <div className={s.messages}>
                {
                    messages.map((message, index) => (
                        <div key={index}>
                            <ChatMessage
                                role={message.role}
                                content={message.content}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default ChatMessages;