import React from 'react';
import Preloader from '../common/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
  debugger
  if (!props.profile) {
    return <Preloader />
  }
  debugger
  return (
    <div className={s.content}>

      <div >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoEZze506DadKM0N7fUra7CyYdVLAP7Q7xA&usqp=CAU' />

        <div className={s.text}>
          <div className={s.description}>
            description + ava
          </div>

          <img src={props.profile.photos.large} style={{width: 250}} />
          <div>Full name: {props.profile.fullName}</div>
          <div>About me: {props.profile.aboutMe}</div>
          <div>Facebook: {props.profile.contacts.facebook}</div>
          <div>Looking for a job: {props.profile.lookingForAJobDescription}</div>
          <div>User id: {props.profile.userId}</div>

          <MyPostsContainer />

        </div>
      </div>
    </div>
  )
}

export default Profile;