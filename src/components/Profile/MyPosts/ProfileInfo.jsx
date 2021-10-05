import React, { useState } from 'react';
import Preloader from '../../common/Preloader';
import ProfileInfoForm from '../ProfileInfoForm/ProfileInfoForm';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateUserStatus, isOwner, savePhoto, saveInfo, invalidUrl }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onAvaChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const sendFormInfo = (e) => {

        let info = {
            fullName: e.fullName,
            aboutMe: e.aboutMe,
            lookingForAJob: e.lookingForAJob,
            lookingForAJobDescription: e.lookingForAJobDescription,
            contacts: {
                facebook: e.contacts.facebook,
                github: e.contacts.github,
                instagram: e.contacts.instagram,
                mainLink: e.contacts.mainLink,
                twitter: e.contacts.twitter,
                vk: e.contacts.vk,
                website: e.contacts.website,
                youtube: e.contacts.youtube
            }
        }
        debugger
        saveInfo(info);
        setEditMode(false);
    }

    const editModeTrue = () => {
        setEditMode(true)
    }

    const cancelSending = () => {
        setEditMode(false)
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

            {!editMode ?
                <div className={s.personal}>
                    <div className={s.personalInfoDescription}>Personal information</div>
                    <div>Full name: {profile.fullName}</div>
                    <div>About me: {profile.aboutMe}</div>
                    <div>My skills: {profile.lookingForAJobDescription}</div>
                    <div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                    <ProfileContacts profile={profile} />
                    {isOwner && <button onClick={editModeTrue}>Edit</button>}
                </div>
                : <ProfileInfoForm profile={profile} sendFormInfo={sendFormInfo} cancelSending={cancelSending} />
            }

            {<div className={s.invalidUrl}> {invalidUrl}</div>}
        </div>
    )
}

const ProfileContacts = ({ profile }) => {
    return (
        <div>
            <div className={s.contacts}>
                <div className={s.contactsTitle}> Contacts: </div>
                {Object.keys(profile.contacts).map(k => {
                    return <div key={k.toString()}> {k}: {profile.contacts[k]} </div>
                })}
            </div>
        </div>
    )
}

export default ProfileInfo;