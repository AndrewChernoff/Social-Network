import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, Form } from 'react-final-form';
import {required, composeValidators, minValue, maxValue} from './../../../Validation/validator'
import { Textarea } from '../../../Validation/FormControl';

const MyPosts = (props) => {
    let postElements = props.postElements.posts.map(p => <Post likeCounter={p.likeCounter} message={p.message} />);

    let onAddPost = (e) => {
        debugger
        let text = e.text;
        props.addPost(text);
    }

    return (
        <div className={s.posts}>
            <div className={s.myPostCaption}>
                My posts
            </div>
            <MyPostsForm onAddPost={onAddPost}/>
            <div className={s.myPosts}>
                {postElements}
            </div>
        </div>
    )
}

const MyPostsForm = (props) => {
    return (
        <Form
            onSubmit={props.onAddPost}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}> 
                    <div>
                        <Field name="text" component={Textarea} validate={composeValidators(required, minValue(1), maxValue(15))} 
                            placeholder={'Create post'}
                        />
                    </div>
                    <button type="submit">Add post</button>
                </form>
            )}
        />
    )
}

export default MyPosts;