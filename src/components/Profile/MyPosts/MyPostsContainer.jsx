import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreConrexr';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addPost = (text) => {
                    store.dispatch(addPostActionCreator(text));
                }

                let onPostChange = (text) => {
                    store.dispatch(updatePostTextActionCreator(text));
                }

                return <MyPosts addPost={addPost}
                    updatePostText={onPostChange}
                    state={state} />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;