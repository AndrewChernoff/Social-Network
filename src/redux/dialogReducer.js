const Send_Message = 'Send-Message';
const Update_Message_Text = 'Update-Message-Text';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case Send_Message:
            let newMessage = {
                message: action.message, id: '3'
            }
            state.message.push(newMessage);
            state.inputMessageText = '';
            return state;
        case Update_Message_Text:
            state.inputMessageText = action.newMessage;
            return state;
    }
    return state
}

export default dialogReducer;