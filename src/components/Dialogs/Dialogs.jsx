import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
	let meassageElements = props.messages.map( m => <Message message={m.message}/>);

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