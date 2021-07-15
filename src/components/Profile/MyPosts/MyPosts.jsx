import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.myPostPage.posts.map(p => <Post likeCounter={p.likeCounter} message={p.message} />);
    let messagePost = React.createRef();

    let addPost = () => {
        let text = messagePost.current.value;
        props.dispatch(addPostActionCreator(text));
    }

    let onPostChange = () => {
        let text = messagePost.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    }

    return (
        <div className={s.posts}>
            <div className={s.myPostCaption}>
                My posts
            </div> 
            <div>
                <textarea ref={messagePost} onChange={onPostChange} value={props.postValueText} placeholder='Enter your post'></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.myPosts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;