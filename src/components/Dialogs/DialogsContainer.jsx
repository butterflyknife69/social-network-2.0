import React from "react";
import { sendMessageAC, updateNewMESSAGETextAC } from "../../redux/dialogsReducer ";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage;
                let sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                let onMessageChange = (newMessage) => {
                    store.dispatch(updateNewMESSAGETextAC(newMessage))
                }
                return <Dialogs
                    sendMessage={sendMessage}
                    updateNewMESSAGEText={onMessageChange}
                    state={state} />
            }
        }
        </StoreContext.Consumer>
    )


}



export default DialogsContainer;