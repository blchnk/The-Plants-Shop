import React, {useState} from 'react';
import {sendQueryToChatGPT} from '../../../api/chatAPI';

const ChatInput = ({messages, setMessages}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return; // if input string in empty
        setMessages([...messages, {role: 'user', content: message}])

        sendQueryToChatGPT(message)
            .then(data => {
                setMessages((m) => [...m, {role: 'assistant', content: data.content}])
            })
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Введите ваше сообщение"
                style={{padding: '0.5rem 0.5rem', border: '1px solid lightgray'}}
            />
            <button type="submit"
                    className='btn btnAnimation'
            >
                Отправить
            </button>
        </form>
    );
};

export default ChatInput;