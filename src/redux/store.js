import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";

let store = {
    _renderEntireTree() {
        console.log('state is changed');
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    _state: {
        myPostPage: {
            posts: [
                { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
                { id: '2', likeCounter: '10', message: "Hi, it's my 1st post" },
            ],
            postValueText: ''
        },

        DialogsPage: {
            dialogs: [
                { name: 'Andrew', id: '1' },
                { name: 'Alex', id: '2' },
                { name: 'Peter', id: '3' },
                { name: 'Jack', id: '3' }
            ],

            message: [
                { message: 'Hey', id: '1' },
                { message: 'How are u', id: '2' },
                { message: 'Sup', id: '3' }
            ],
            inputMessageText: ''
        }, 
        sidebar: {

        }
    },
    getState() {
        return this._state;
    },

    dispatch (action) {
        this._state.myPostPage = profileReducer(this._state.myPostPage, action);
        this._state.DialogsPage = dialogReducer(this._state.DialogsPage,action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)
        this._renderEntireTree(this._state);
    }
}

export default store;