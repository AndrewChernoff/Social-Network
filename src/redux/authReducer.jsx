import { AuthUserAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'samurai-network/SET_USER_DATA';
const GET_CAPTCHA_URL = 'samurai-network/GET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isWrongLogin: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        case GET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.captchaURL
            }


        default:
            return state;
    }

}


export const setUserData = (userId, email, login, isAuth, isWrongLogin) => { return { type: SET_USER_DATA, data: { userId, email, login, isAuth, isWrongLogin } } }
export const getCaptchaURL = (captchaURL) => { return { type: GET_CAPTCHA_URL, captchaURL } }

export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthUserAPI.me()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true, false));
    }
}

export const loginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthUserAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 1) {
        dispatch(setUserData(null, null, null, false, true));
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
    }
}

export const logoutUser = () => async (dispatch) => {
    let response = await AuthUserAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false, false));
    }
}

const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptcha();
    dispatch(getCaptchaURL(response.data.url));
}

export default authReducer