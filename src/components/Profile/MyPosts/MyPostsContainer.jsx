import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreConrexr';
import { connect } from 'react-redux';



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