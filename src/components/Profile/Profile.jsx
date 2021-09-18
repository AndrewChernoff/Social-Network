import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo';
import s from './Profile.module.css';

const Profile = ({ profile, status, updateUserStatus }) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;