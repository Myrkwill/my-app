import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const Dialogs = props => {

	if (!props.isAuth) return <Navigate to="/login" />;

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	));
	
	let messagesElements = state.messages.map(m => (
		<Message message={m.message} />
	));

	return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMassageForm sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMassageForm = (props) => {
  let addNewMessage = (values) => {
    props.sendMessage(values);
  };

  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newMessageBody"}
              as={"textarea"}
              placeholder={"Enter your message"}
            />
          </div>

          <button type={"submit"}>Send message</button>
        </Form>
      )}
    </Formik>
  );
};

export default Dialogs;
