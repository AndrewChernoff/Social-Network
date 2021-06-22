import { checkPropTypes } from 'prop-types';
import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
            <div className={s.messages}>
               <div>{props.message}</div>
            </div>
    )
}

export default Message;