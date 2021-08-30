import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {
    let messageItems = props.state.message.map(m => <Message message={m.message} key={m.id} />)
    let inputMessageText = props.state.inputMessageText;
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