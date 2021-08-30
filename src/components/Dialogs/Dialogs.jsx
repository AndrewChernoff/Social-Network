import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItems />
            <MessagesContainer />
        </div>
    )
}

export default Dialogs;