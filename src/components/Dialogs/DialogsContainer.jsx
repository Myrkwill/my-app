import React from "react";
import Dialog from "./Dialogs"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const DialogsContainer = props => {
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	};

	let updateNewMessageBody = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (
		<Dialog
			dialogsPage={state}
			updateNewMessageBody={updateNewMessageBody}
			sendMessage={onSendMessageClick}
		/>
	);
};

export default DialogsContainer;
