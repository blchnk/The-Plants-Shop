import React, {useCallback, useState} from 'react';
import {sendQueryToChatGPT} from '../../../api/chatAPI';

const ChatInput = ({messages, setMessages}) => {
    const [message, setMessage] = useState('');

    const handleMessage = useCallback((message) => {
        setMessages((prevMessages) => {
            const newMessages = [...prevMessages, message];
            const lastMessage = newMessages[newMessages.length - 1];

            if (lastMessage.role === 'user') {
                sendQueryToChatGPT(newMessages)
                    .then(data => {
                        const assistantResponse = { role: 'assistant', content: data.content };
                        setMessages([...newMessages, assistantResponse]);
                    });
            }
            return newMessages;
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return; // if input string in empty

        handleMessage({role: 'user', content: message})
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