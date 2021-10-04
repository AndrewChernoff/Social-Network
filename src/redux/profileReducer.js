import { profileAPI, UserAPI } from "../API/api";

const Add_Post = 'Add-Post';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
        { id: '2', likeCounter: '10', message: "Hi, it's my 1st post" },
    ],
    postValueText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case Add_Post:
            let newPost = {
                id: '3', likeCounter: '0', message: action.text
            }
            return {
                ...state,
                postValueText: '',
                posts: [...state.posts, newPost],

            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo }
            }
    }
    return state
}

export const addPostActionCreator = (text) => {
    return { type: 'Add-Post', text }
}
export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } };
export const setUserStatus = (status) => { return { type: SET_USER_STATUS, status } };
export const savePhotoSucces = (photo) => { return { type: SAVE_PHOTO_SUCCESS, photo } };

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await UserAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}


export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.saveUserPhoto(photo)
    debugger
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSucces(response.data.data.photos));
    }
}
//finish photo updating 

export default profileReducer;