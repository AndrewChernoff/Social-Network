import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect(() => {
    setStatus(props.status) 
 }, [props.status]);
    

   let activateMode = () => {
        setEditMode(true)
    }

   let deactivateMode = (e) => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    let onStatusChange = (e) => {
        let updatedStatus = e.currentTarget.value;
        setStatus(updatedStatus);
    }

        return (
            <div>
                {!editMode &&
                    <div onDoubleClick={activateMode}>
                        status: {props.status || '-----'}
                    </div>}

                {editMode &&
                    <div>
                        status: <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode} value={status} />
                    </div>}
            </div>
        )
    }

export default ProfileStatusWithHooks