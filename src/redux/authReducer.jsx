import { AuthUserAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isWrongLogin: false
}

const authReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
    }
    return state;
}


export const setUserData = (userId, email, login, isAuth, isWrongLogin) => { return { type: SET_USER_DATA, data: { userId, email, login, isAuth, isWrongLogin } } }

export const getAuthUserData = () => (dispatch) => {
    return AuthUserAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true, false));
            }
        }
        )
    } 

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    return AuthUserAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else if (response.data.messages[0] === "Incorrect Email or Password" || "Something wrong") {
            dispatch(setUserData(null, null, null, false, true)); 
        }
    })
}

export const logoutUser = () => (dispatch) => {
    return AuthUserAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false, false));
        }
    })
}

export default authReducer