import { AuthUserAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
    }
    return state;
}


export const setUserData = (userId, email, login) => { return { type: SET_USER_DATA, data: { userId, email, login } } }

export const getAuthUserData = () => {
    return dispatch => {
        AuthUserAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login));
            }
        }
        )
    }
}

export default authReducer