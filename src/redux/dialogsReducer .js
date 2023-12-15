let initialState = {
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Hi bro" },
        { id: 4, message: "What your doing" },
        { id: 5, message: "Brooo" },
        { id: 6, message: "Waid a minute" }
    ],
    dialogs: [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
    ],
    newMessageText: 'Hello'
}

const dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let dialogMessage = { id: 7, message: state.newMessageText }
            state.messages.push(dialogMessage)
            state.newMessageText = '';
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}


// DialogsAC
export const sendMessageAC = () => ({ type: 'SEND-MESSAGE' })
export const updateNewMESSAGETextAC = (newMessage) =>
    ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage })



export default dialogsReducer;