import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoEZze506DadKM0N7fUra7CyYdVLAP7Q7xA&usqp=CAU' />

            <div className={s.description}>
                description + ava
            </div>

            <img src={props.profile.photos.large} style={{ width: 250 }} />
            <div>Full name: {props.profile.fullName}</div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Facebook: {props.profile.contacts.facebook}</div>
            <div>Looking for a job: {props.profile.lookingForAJobDescription}</div>
            <div>User id: {props.profile.userId}</div>
        </div>
    )
}

export default ProfileInfo;