import { createStore, combineReducers  } from 'redux';
import authReducer from './redux/authReducer';
import dialogReducer from './redux/dialogReducer';
import profileReducer from './redux/profileReducer';
import sideBarReducer from './redux/sidebarReducer';
import { usersReducer } from './redux/usersReducer';

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    myPostPage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    userAuth: authReducer
})



let store = createStore(reducers);
window.store = store;
export default store;