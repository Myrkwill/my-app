import Dialog from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDisptchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDisptchToProps)(Dialog);

export default DialogsContainer;
