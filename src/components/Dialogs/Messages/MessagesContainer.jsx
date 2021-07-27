import React from 'react';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/store';
import StoreContext from '../../../StoreConrexr';
import Messages from './Messages';
import {connect} from 'react-redux';
/* const MessagesContainer = (props) => {
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
                return <Messages sendMessage={sendMessage} updateMessage={onClickButtonChange}
                state={state.DialogsPage}
                 />
            }
            }
        </StoreContext.Consumer>
    )
} */
let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
        updateMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;