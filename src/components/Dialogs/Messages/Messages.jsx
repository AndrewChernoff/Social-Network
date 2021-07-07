import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {

    let messageItems = props.message.DialogsPage.message.map(m => <Message message={m.message}/>)

    return (
            <div className={s.messages}>
            {messageItems}
            </div>
    )
}

export default Messages;