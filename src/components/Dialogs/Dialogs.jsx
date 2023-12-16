import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import React from "react";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage()
    }
    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.updateNewMESSAGEText(newMessage)
    }
    return (
        <div className={s.wraper}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} /></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;