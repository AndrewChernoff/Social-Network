let store = {
    _renderEntireTree() {
        console.log('state is changed');
    },
    _state: {
        myPostPage: {
            posts: [
                { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
                { id: '2', likeCounter: '10', message: "Hi, it's my 1st post" },
            ],
            postValueText: 'Text your post'
        },

        DialogsPage: {
            dialogs: [
                { name: 'Andrew', id: '1' },
                { name: 'Alex', id: '2' },
                { name: 'Peter', id: '3' }
            ],

            message: [
                { message: 'Hey', id: '1' },
                { message: 'How are u', id: '2' },
                { message: 'Sup', id: '3' }
            ]
        }
    },
    getState() {
        return this._state;
    },

    addPost(message) {
        let newPost = {
            id: '3', likeCounter: '0', message: message
        }
        this._state.myPostPage.posts.push(newPost);
        this._state.myPostPage.postValueText = '';
        this._renderEntireTree(this._state);
    },
    updatePosText(newMessage) {
        this._state.myPostPage.postValueText = newMessage;
        this._renderEntireTree(this._state);
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    }
}
////////////////////////////

/* let renderEntireTree = () => {
    alert('state is changed');
}

let state = {
    myPostPage: {
    posts: [
        { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
        { id: '2', likeCounter: '10', message: "Hi, it's my 1st post" },
    ],
    postValueText: 'Text your post'
},
    
    DialogsPage: {
    dialogs: [
        { name: 'Andrew', id: '1' },
        { name: 'Alex', id: '2' },
        { name: 'Peter', id: '3' }
    ],

    message: [
        { message: 'Hey', id: '1' },
        { message: 'How are u', id: '2' },
        { message: 'Sup', id: '3' }
    ]
}
};

export const addPost = (message) => {
    let newPost = {
        id: '3', likeCounter: '0', message:message
    }
    state.myPostPage.posts.push(newPost);
    state.myPostPage.postValueText = '';
    renderEntireTree(state);
}

export const updatePosText = (newMessage) => {
    state.myPostPage.postValueText = newMessage;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
   renderEntireTree = observer;
} */

export default store;