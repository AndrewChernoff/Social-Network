const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';

let initialState = {
    posts: [
        { id: '1', likeCounter: '20', message: 'Hi, how are you?' },
        { id: '2', likeCounter: '10', message: "Hi, it's my 1st post" },
    ],
    postValueText: ''
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case Add_Post:
            let newPost = {
                id: '3', likeCounter: '0', message: action.message
            }
            state.posts.push(newPost);
            state.postValueText = '';
            return state;
        case Update_Post_Text:
            state.postValueText = action.newMessage;
            return state;
    }
    return state
}

export default profileReducer;