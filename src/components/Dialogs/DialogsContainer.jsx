import React from "react";
import { sendMessageAC, updateNewMESSAGETextAC } from "../../redux/dialogsReducer ";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMESSAGETextAC(newMessage))
    }
    return <Dialogs
        sendMessage={sendMessage}
        updateNewMESSAGEText={onMessageChange}
        state={state} />
}



export default DialogsContainer;