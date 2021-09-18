import React from 'react';
import { Field, Form } from 'react-final-form';
import Message from './Message/Message';
import s from './Messages.module.css';
import { required, composeValidators, minValue, maxValue } from './../../../Validation/validator';
import { Textarea } from '../../../Validation/FormControl';

const Messages = (props) => {
    let messageItems = props.state.message.map(m => <Message message={m.message} key={m.id} />)

    let onSendMessage = (e) => {
        let text = e.message;
        props.sendMessage(text);
        e.message = undefined
    }


    return (
        <div className={s.messages}>
            {messageItems}
            <MessagesForm onSendMessage={onSendMessage} />
        </div>
    )
}

const MessagesForm = (props) => {

    return (
        <Form
            onSubmit={props.onSendMessage}

            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="message" placeholder={"Enter your message"} component={Textarea}
                            validate={composeValidators(required, minValue(1), maxValue(15))} />
                    </div>
                    <button type="submit">Send</button>
                </form>
            )}
        />
    )
}


export default Messages;