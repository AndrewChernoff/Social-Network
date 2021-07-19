import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {
    let state = props.state;
    let messageItems = state.DialogsPage.message.map(m => <Message message={m.message} />)
    let inputMessageText = state.DialogsPage.inputMessageText;
    let messageText = React.createRef();

    let onSendMessage = () => {
        let text = messageText.current.value;
        props.sendMessage(text);
    }
    
    let onClickButtonChange = () => {
        let text = messageText.current.value;
        props.updateMessage(text);
    }
    
    return (
        <div className={s.messages}>
            {messageItems}
            <textarea ref={messageText} onChange={onClickButtonChange} value={inputMessageText} placeholder='Enter your message'></textarea>
            <div>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;