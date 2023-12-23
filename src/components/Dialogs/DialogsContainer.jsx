import { sendMessage, updateNewMESSAGEText } from "../../redux/dialogsReducer ";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMESSAGEText })(Dialogs)


export default DialogsContainer;