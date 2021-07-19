import React from 'react';
import s from './DialogItems.module.css'
import DialogItem from './DialogItem/DialogItem';

const DialogItems = (props) => {
    let state = props.store.getState();
    let dialogElements = state.DialogsPage.dialogs.map(d =>  <DialogItem name= {d.name} id={d.id}/>);
    
    return (
        <div className={s.dialogItems}>
        {dialogElements}
        </div>
    )
}

export default DialogItems;