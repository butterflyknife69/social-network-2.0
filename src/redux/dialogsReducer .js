

const dialogsReducer = (state, action) => {

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