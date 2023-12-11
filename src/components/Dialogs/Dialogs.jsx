
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"



const Dialogs = (props) => {
    return (
        <div className={s.wraper}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Dimich" id="1" />
                    <DialogItem name="Andrew" id="2" />
                    <DialogItem name="Sveta" id="3" />
                    <DialogItem name="Sasha" id="4" />
                    <DialogItem name="Viktor" id="5" />
                    <DialogItem name="Valera" id="6" />
                </div>
                <div className={s.messages}>
                    <Message message="Hi" />
                    <Message message="How are you" />
                    <Message message="Hi bro" />
                    <Message message="What your doing" />
                    <Message message="Brooo" />
                    <Message message="Waid a minute" />
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