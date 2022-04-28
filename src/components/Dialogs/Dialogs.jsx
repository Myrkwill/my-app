import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = props => {

	if (!props.isAuth) return <Navigate to="/login" />;

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	));
	let messagesElements = state.messages.map(m => (
		<Message message={m.message} />
	));
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = e => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>{dialogsElements}</div>
			<div className={styles.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder="Enter your message"
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
