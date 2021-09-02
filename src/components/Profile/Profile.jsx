import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;