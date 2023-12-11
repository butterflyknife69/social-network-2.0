
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"


const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
    ]
    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Hi bro" },
        { id: 4, message: "What your doing" },
        { id: 5, message: "Brooo" },
        { id: 6, message: "Waid a minute" }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.wraper}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.sms}>{props.message}</div>
    )
}

export default Dialogs;