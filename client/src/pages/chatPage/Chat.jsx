import React, {useState} from 'react';
import styles from './Chat.module.scss';
import ChatMessages from "../../components/chat/ChatMessages/ChatMessages";
import ChatInput from "../../components/chat/ChatInput/ChatInput";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    return (
        <div className='container'>
            <h2 style={{fontSize: '30px'}}>Задай вопрос боту-садоводу</h2>
            <ChatMessages messages={messages}/>
            <ChatInput setMessages={setMessages}/>
        </div>
    );
};

export default Chat;
