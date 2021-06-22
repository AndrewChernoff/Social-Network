import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = /dialog/+ props.id;

    return (
    <div>
        <NavLink to={path} className={s.dialogItem}>{props.name}</NavLink>
    </div>
    )
}

export default DialogItem;