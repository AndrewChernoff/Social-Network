import React from 'react';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/store';
import Message from './Message/Message';
import s from './Messages.module.css';

const Messages = (props) => {
    let messageItems = props.message.DialogsPage.message.map(m => <Message message={m.message} />)
    let inputMessageText = props.inputMessageText
    let messageText = React.createRef();

    let sendMessage = () => {
        let text = messageText.current.value;
        props.dispatch(sendMessageActionCreator(text));
    }
    
    let onClickButtonChange = () => {
        let text = messageText.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }
    
    return (
        <div className={s.messages}>
            {messageItems}
            <textarea ref={messageText} onChange={onClickButtonChange} value={inputMessageText} placeholder='Enter your message'></textarea>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;