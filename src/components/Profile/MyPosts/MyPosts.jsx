import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData = [
        { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
        { id: '1', likeCounter: '10', message: "Hi, it's my 1st post" }
    ]

    let post = postData.map(p => <Post likeCounter={p.likeCounter} message={p.message} />);

    return (
        <div className={s.posts}>
            My posts
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.myPosts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;