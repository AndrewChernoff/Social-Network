import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>

        <div >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoEZze506DadKM0N7fUra7CyYdVLAP7Q7xA&usqp=CAU' />

        <div className={s.text}>
          <div className={s.description}>
            description + ava
          </div>
           
        <MyPosts/>
        
        </div>
        </div>
      </div>
    )
}

export default Profile;