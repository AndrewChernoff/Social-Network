import React from 'react';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/store';
import StoreContext from '../../../StoreConrexr';
import Messages from './Messages';

const MessagesContainer = (props) => {
    /* let state = props.store.getState();

    let sendMessage = (text) => {
        props.store.dispatch(sendMessageActionCreator(text));
    }

    let onClickButtonChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    } */

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let sendMessage = (text) => {
                    store.dispatch(sendMessageActionCreator(text));
                }

                let onClickButtonChange = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }
           return  <Messages sendMessage={sendMessage} updateMessage={onClickButtonChange} state={state} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;