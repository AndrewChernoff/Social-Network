import React from 'react';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/store';
import Messages from './Messages';

const MessagesContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = (text) => {
        props.store.dispatch(sendMessageActionCreator(text));
    }
    
    let onClickButtonChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }
    
    return (
       <Messages sendMessage={sendMessage} updateMessage={onClickButtonChange} state={state}/>
    )
}

export default MessagesContainer;