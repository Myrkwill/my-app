import React from "react";
import styles from "./ProfileInfo.module.css";
import { Formik, Form, Field } from "formik";

const ProfileDataForm = ({ profile, saveProfile }) => {
  const onSubmit = (values, actions) => {
    saveProfile(values, actions.setStatus);
	actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={profile}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <button type={"submit"}>save</button>
        </div>
        <div>
          <label htmlFor={"fullName"}> Full Name </label>
          <Field name={"fullName"} type={"text"} placeholder={"Full name"} />
        </div>

        <div>
          <label htmlFor={"lookingForAJob"}>Looking for a job:</label>
          <Field type={"checkbox"} name={"lookingForAJob"} id="rememberMe" />
        </div>

        <div>
          <label htmlFor={"lookingForAJobDescription"}>
            My professional skills:
          </label>
          <Field
            name={"lookingForAJobDescription"}
            type={"text"}
            placeholder="My professional skills"
          />
        </div>

        <div>
          <label htmlFor={"aboutMe"}> About me: </label>
          <Field name={"aboutMe"} type={"text"} placeholder="About me" />
        </div>

        <div>
          <b>Contacts</b>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={styles.contact}>
                <b>
                  <Field
                    name={"contacts." + key}
                    type={"text"}
                    placeholder={key}
                  />
                </b>
              </div>
            );
          })}
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
