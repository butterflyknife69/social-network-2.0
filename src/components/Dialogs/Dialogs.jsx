import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import React from "react";
import { sendMessageAC, updateNewMESSAGETextAC } from "../../redux/store";




const Dialogs = (props) => {
console.log(props);
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageAC())
        
    }
    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(updateNewMESSAGETextAC(newMessage))
    }
    return (
        <div className={s.wraper}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}/></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;