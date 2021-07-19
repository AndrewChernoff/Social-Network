import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator(text));
    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <MyPosts addPost={addPost} 
        updatePostText={onPostChange}
        state={state}/>
    )
}

export default MyPostsContainer;