import React, { useState } from 'react';
import styles from './Chat.module.scss';
import ChatMessages from "../../components/chat/ChatMessages/ChatMessages";
import ChatInput from "../../components/chat/ChatInput/ChatInput";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    return (
        <div className='container'>
            <h2 style={{fontSize: '40px'}}>Задайте вопрос</h2>
            <div id='messages' style={{margin: '1rem 0', height: '60vh', overflowY: 'scroll'}}>
                <ChatMessages messages={messages} setMessages={setMessages}/>
            </div>
            <ChatInput messages={messages} setMessages={setMessages}/>
        </div>
    );
};

export default Chat;
