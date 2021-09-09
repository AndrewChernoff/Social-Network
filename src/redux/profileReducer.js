import { profileAPI, UserAPI } from "../API/api";

const Add_Post = 'Add-Post';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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
    }
    return state
}

export const addPostActionCreator = (text) => {
    return { type: 'Add-Post',  text }
}



export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } };
export const setUserStatus = (status) => { return { type: SET_USER_STATUS, status } };

export const getUserProfile = (userId) => (dispatch) => {
    UserAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    })
}


export default profileReducer;