import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogItems dialogs={props.dialogs}/>
            <Messages message={props.message}/>
        </div>
    )
}

export default Dialogs;