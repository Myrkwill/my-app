import Dialog from "./Dialogs";
import { sendMessageCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDisptchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageCreator(message));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDisptchToProps),
  withAuthRedirect
)(Dialog);
