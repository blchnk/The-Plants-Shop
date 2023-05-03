import React from 'react';

const ChatMessage = ({ author, content }) => {
    return (
        <div>
            <p>
                <strong>
                    {author === 'user' ? 'Вы:' : 'ChatGPT:'}
                </strong>
                {content}
            </p>
        </div>
    );
};

export default ChatMessage;