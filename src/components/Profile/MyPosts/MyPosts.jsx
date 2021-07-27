import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.postElements.posts.map(p => <Post likeCounter={p.likeCounter} message={p.message} />);
    let postValueText = props.postElements.postValueText;
    let messagePost = React.createRef();

    let onAddPost = () => {
        let text = messagePost.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = messagePost.current.value;
        props.updatePostText(text)
    }

    return (
        <div className={s.posts}>
            <div className={s.myPostCaption}>
                My posts
            </div> 
            <div>
                <textarea ref={messagePost} onChange={onPostChange} value={postValueText} placeholder='Enter your post'></textarea>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.myPosts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;