import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItems store={props.store}/>
            <MessagesContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;