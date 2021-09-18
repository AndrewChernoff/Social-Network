const Send_Message = 'Send-Message';

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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case Send_Message:
            let newMessage = {
                message: action.text, id: '3'
            }
            return {
                ...state,
                message: [...state.message, newMessage],
            }

    }
    return state
}

export const sendMessageActionCreator = (text) => {
    return { type: Send_Message, text }
}


export default dialogReducer;