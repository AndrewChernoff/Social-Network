import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>

        <Post likeCounter="20" message="Hi, how are you?"/>
        <Post likeCounter="10" message="Hi, it's my 1st post"/>
    </div>
    )
}

export default MyPosts;