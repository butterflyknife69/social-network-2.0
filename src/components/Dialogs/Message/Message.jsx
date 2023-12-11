import s from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={s.sms}>{props.message}</div>
    )
}
export default Message;