import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreConrexr';
import { connect } from 'react-redux';

/* const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()

                let addPost = (text) => {
                    store.dispatch(addPostActionCreator(text));
                }

                let onPostChange = (text) => {
                    store.dispatch(updatePostTextActionCreator(text));
                }

                return <MyPosts addPost={addPost}
                    updatePostText={onPostChange}
                    postElements={state.myPostPage}
                    postValueText={state.myPostPage} />
            }}
        </StoreContext.Consumer>
    )
} */

let mapStateToProps = (state) => {
    return {
        postElements: state.myPostPage,
        postValueText: state.myPostPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {dispatch(addPostActionCreator(text))},
        updatePostText: (text) => {dispatch(updatePostTextActionCreator(text))} 
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;