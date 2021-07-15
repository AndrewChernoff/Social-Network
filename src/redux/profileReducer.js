const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';

const profileReducer = (state, action) => {
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