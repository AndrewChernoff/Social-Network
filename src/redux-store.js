import { createStore, combineReducers  } from 'redux';
import dialogReducer from './redux/dialogReducer';
import profileReducer from './redux/profileReducer';
import sideBarReducer from './redux/sidebarReducer';

let reducers = combineReducers({
    DialogsPage: dialogReducer,
    myPostPage: profileReducer,
    sidebar: sideBarReducer
})

let store = createStore(reducers);
window.store = store;
export default store;