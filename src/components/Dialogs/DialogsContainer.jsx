import Dialog from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

let withAuthRedirectComponent = withAuthRedirect(Dialog);
// let withRouterComponent = withRouter(withAuthRedirectComponent);

export default connect(
  mapStateToProps,
  mapDisptchToProps
)(withAuthRedirectComponent);
