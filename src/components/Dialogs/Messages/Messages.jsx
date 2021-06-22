import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = () => {

    let messageData = [
        {message:'Hey', id:'1'},
        {message:'How are u', id:'2'},
        {message:'Sup', id:'3'}
    ];

    let message = messageData.map(m => <Message message= {m.message}/>)

    return (
            <div className={s.messages}>
            {message}
            </div>
    )
}

export default Messages;