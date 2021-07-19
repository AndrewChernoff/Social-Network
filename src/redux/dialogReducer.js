const Send_Message = 'Send-Message';
const Update_Message_Text = 'Update-Message-Text';

let initialState = {
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
}

const dialogReducer = (state=initialState, action) => {
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