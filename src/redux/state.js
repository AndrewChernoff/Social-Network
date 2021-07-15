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

        /* if (action.type === 'Add-Post') {
            let newPost = {
                id: '3', likeCounter: '0', message: action.message
            }
            this._state.myPostPage.posts.push(newPost);
            this._state.myPostPage.postValueText = '';
            this._renderEntireTree(this._state);
        } else if (action.type === 'Update-Post-Text') {
            this._state.myPostPage.postValueText = action.newMessage;
            this._renderEntireTree(this._state);
        } else if (action.type === 'Send-Message') {
            let newMessage = {
                message: action.message, id: '3' 
            }
            this._state.DialogsPage.message.push(newMessage);
            this._state.DialogsPage.inputMessageText = '';
            this._renderEntireTree(this._state);
        } else if (action.type === 'Update-Message-Text') {
            this._state.DialogsPage.inputMessageText = action.newMessage;
            this._renderEntireTree(this._state);
        } */
    }
}

export const addPostActionCreator = (text) => {
    return {type: 'Add-Post', message: text}
}

export const updatePostTextActionCreator = (text) => {
    return {type: 'Update-Post-Text', newMessage: text}
}

export const sendMessageActionCreator = (text) => {
    return {type:'Send-Message', message: text}
}

export const updateMessageTextActionCreator = (text) => {
    return {type:'Update-Message-Text', newMessage: text}
}

export default store;