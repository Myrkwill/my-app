import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
	let path = "/dialog/" + props.id

	return (
		<div className={styles.dialog + ' ' + styles.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

const Message = (props) => {
	return (
		<div className={styles.message}>{props.message}</div>
	);
}

const Dialogs = () => {

	let dialogsData = [
		{ id: 1, name: 'Mark' },
		{ id: 2, name: 'Mark1' },
		{ id: 3, name: 'Mark2' },
		{ id: 4, name: 'Mark3 ' },
	]

	let messageData = [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: 'hi2' },
		{ id: 3, message: 'hi2' },
		{ id: 4, message: 'hi5 ' },
	]

	let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);
	let meassageElements = messageData.map( m => <Message message={m.message}/>);


	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogElements}
			</div>
			<div className={styles.messages}>
				{meassageElements}
			</div>
		</div>
	);
}

export default Dialogs;