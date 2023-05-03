import React, {useState} from 'react';
import {sendQueryToChatGPT} from '../../../api/chatAPI';

const ChatInput = ({messages, setMessages}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return; // if input string in empty
        setMessages([...messages, {author: 'user', content: message}])
        sendQueryToChatGPT(message)
            .then(data => {
                console.log(data)
                setMessages((m) => [...m, {author: 'ChatGPT', content: data.data.content}])
            });
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Введите ваше сообщение"
            />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default ChatInput;