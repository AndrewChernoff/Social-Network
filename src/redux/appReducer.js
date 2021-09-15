import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    isInitialized: false
}

export const appReducer = (state=initialState, action) => {
    debugger
    switch (action.type) {
            case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    }
    )
}

