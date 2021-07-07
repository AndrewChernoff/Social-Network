import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.myPostPage.posts.map(p => <Post likeCounter={p.likeCounter} message={p.message} />);
    let messagePost = React.createRef();

    let addPost = () => {
        let text = messagePost.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = messagePost.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={s.posts}>
            <div className={s.myPostCaption}>
                My posts
            </div> 
            <div>
                <textarea ref={messagePost} onChange={onPostChange} value={props.postValueText}></textarea>
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