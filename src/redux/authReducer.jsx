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
                ...action.data
            }
    }
    return state;
}


export const setUserData = (userId, email, login, isAuth) => { return { type: SET_USER_DATA, data: { userId, email, login, isAuth } } }

export const getAuthUserData = () => {
    return dispatch => {
        AuthUserAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                debugger
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        }
        )
    }
}

export const loginUser = (email, password, rememberMe) => (dispatch) => {
    return AuthUserAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    })
}

export const logoutUser = () => (dispatch) => {
    return AuthUserAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    })
}

export default authReducer