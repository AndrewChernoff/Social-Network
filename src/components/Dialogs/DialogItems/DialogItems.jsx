import React from 'react';
import s from './DialogItems.module.css'
import DialogItem from './DialogItem/DialogItem';


const DialogItems = () => {

let dialogsData = [
    {name:'Andrew', id:'1'},
    {name:'Alex', id:'2'},
    {name:'Peter', id:'3'}
];

    let dialogs = dialogsData.map(d =>  <DialogItem name= {d.name} id={d.id}/>);

    return (
        <div className={s.dialogItems}>
        {dialogs}
        </div>
    )
}

export default DialogItems;