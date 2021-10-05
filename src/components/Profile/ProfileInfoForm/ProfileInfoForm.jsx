import { Form } from 'react-final-form';
import { createProfileForm, Input, Textarea } from '../../../Validation/FormControl';
import s from '../MyPosts/ProfileInfo.module.css';

const ProfileInfoForm = ({ profile, sendFormInfo, cancelSending }) => {
    return (
        <div>
            <Form
                onSubmit={sendFormInfo}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={s.personal}>
                            <div className={s.personalInfoDescription}>Personal information</div>
                            <div> Full name:  {createProfileForm('fullName', Input, 'Full name', null, 'text', profile.fullName)} </div>
                            <div> About me:  {createProfileForm('aboutMe', Textarea, 'About me', null, 'text', profile.aboutMe)}</div>
                            <div> My skills:  {createProfileForm('lookingForAJobDescription', Textarea, 'My skills', null, 'text', profile.lookingForAJobDescription)}</div>
                            <div>Looking for a job: {createProfileForm('lookingForAJob', Input, 'lookingForAJob', null, 'checkbox', profile.lookingForAJob)}</div>
                        </div>

                        <div className={s.contacts}>
                            <div className={s.contactsTitle}> Contacts: </div>
                            {Object.keys(profile.contacts).map(k => {
                                return <div key={k.toString()}> <div> {k}: </div> {createProfileForm('contacts.' + [k], Input, [k], null, 'text', profile.contacts[k])} </div>
                            })}
                        </div>
                        <div className={s.buttons}>
                            <button>Send</button> <button onClick={cancelSending}>Cancel</button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

///send data to server

export default ProfileInfoForm;