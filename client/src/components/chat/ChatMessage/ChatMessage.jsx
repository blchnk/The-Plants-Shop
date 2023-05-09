import React from 'react';
import s from '../ChatMessage/ChatMessage.module.scss'

const ChatMessage = ({role, content}) => {
    return (
        <>
            <p className={role === 'user' ? s.userMessage : s.assistantMessage}>
                <>
                    <strong style={{fontWeight: 500}}>
                        {role === 'user' ? 'Вы: ' : 'Садовод: '}
                    </strong>
                    {content}
                </>
            </p>
        </>
    );
};

export default ChatMessage;