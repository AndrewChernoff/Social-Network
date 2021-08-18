const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
        { id: '2', likeCounter: '10', message: "Hi, it's my 1st post" },
    ],
    postValueText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post:
            let newPost = {
                id: '3', likeCounter: '0', message: action.message
            }
            return {
                ...state,
                postValueText: '',
                posts: [...state.posts, newPost],

            };

        case Update_Post_Text:
            return {
                ...state,
                postValueText: action.newMessage
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
    }
    return state
}

export const addPostActionCreator = (text) => {
    return { type: 'Add-Post', message: text }
}

export const updatePostTextActionCreator = (text) => {
    return { type: 'Update-Post-Text', newMessage: text }
}

export const setUserProfile = (profile) => { return { type: SET_USER_PROFILE, profile } };


export default profileReducer;