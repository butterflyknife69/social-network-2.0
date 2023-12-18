import { sendMessageAC, updateNewMESSAGETextAC } from "../../redux/dialogsReducer ";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage:() => { dispatch(sendMessageAC()) },
        updateNewMESSAGEText:(newMessage)=> { dispatch(updateNewMESSAGETextAC(newMessage)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;