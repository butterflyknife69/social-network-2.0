import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageElement=React.createRef();
    let sendMessage=()=>{
        let text=newMessageElement.current.value;
        props.sendMessage(text)
        newMessageElement.current.value='';
    }

    return (
        <div className={s.wraper}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div><textarea ref={newMessageElement} /></div>
                    <div><button onClick={sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;