import React from 'react';

const ChatMessage = ({ author, content }) => {
    return (
        <div>
            <p>
                <strong style={{fontWeight: 500}}>
                    {author === 'user' ? 'Вы: ' : 'ChatGPT: '}
                </strong>
                {content}
            </p>
        </div>
    );
};

export default ChatMessage;