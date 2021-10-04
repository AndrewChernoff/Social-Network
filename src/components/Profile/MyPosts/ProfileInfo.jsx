import React from 'react';
import Preloader from '../../common/Preloader';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onAvaChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.description}>
                <img src={profile.photos.large} className={s.photo} alt='user ava' />
                <div className={s.sendFile}>
                    {isOwner && <input type="file" onChange={onAvaChange} />}
                </div>
            </div>

            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />

            <div>Full name: {profile.fullName}</div>
            <div>About me: {profile.aboutMe}</div>
            <div>My skills: {profile.lookingForAJobDescription}</div>
            <div>Facebook: {profile.contacts.facebook}</div>
            <div>User id: {profile.userId}</div>
        </div>
    )
}

export default ProfileInfo;