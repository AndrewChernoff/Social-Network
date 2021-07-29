import { createStore, combineReducers  } from 'redux';
import dialogReducer from './redux/dialogReducer';
import profileReducer from './redux/profileReducer';
import sideBarReducer from './redux/sidebarReducer';
import { usersReducer } from './redux/usersReducer';

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    myPostPage: profileReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer
})



let store = createStore(reducers);
window.store = store;
export default store;