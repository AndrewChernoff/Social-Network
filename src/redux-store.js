import { createStore, combineReducers, applyMiddleware  } from 'redux';
import authReducer from './redux/authReducer';
import dialogReducer from './redux/dialogReducer';
import profileReducer from './redux/profileReducer';
import sideBarReducer from './redux/sidebarReducer';
import { usersReducer } from './redux/usersReducer';
import thunk from 'redux-thunk';
import { appReducer } from './redux/appReducer';


let reducers = combineReducers({
    DialogsPage: dialogReducer,
    myPostPage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    userAuth: authReducer,
    app: appReducer
})



let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;