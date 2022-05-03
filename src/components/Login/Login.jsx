import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const validationSchemaLoginForm = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(50, "Must be shorter than 5 characters")
    .required("Required"),
});

const Login = ({ isAuth, login, captchaUrl }) => {
  if (isAuth) {
    return <Navigate to="/profile/" />;
  }

  const onSubmit = (values, actions) => {
	  console.log(values)
    login(values.email, values.password, values.rememberMe, values.captcha, actions.setStatus);
    actions.setSubmitting(false);
  };

  return (
    <div>
      <h2> Login </h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
		  captcha: ""
        }}
        validationSchema={validationSchemaLoginForm}
        onSubmit={onSubmit}
      >
        {({ status }) => (
          <Form>
            <div>
              <Field name={"email"} type={"text"} placeholder={"Email"} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field
                name={"password"}
                type={"password"}
                placeholder={"password"}
              />
            </div>
            <ErrorMessage name="password">
              {(msg) => <div style={{ color: "red" }}>{msg}</div>}
            </ErrorMessage>

            <div>
              <Field type={"checkbox"} name={"rememberMe"} id="rememberMe" />
              <label htmlFor={"rememberMe"}> remember me </label>
            </div>

			{ captchaUrl &&
				<div>
				<div>
					<img src={captchaUrl} />
				</div>
				<Field name={"captcha"} type={"text"} />
				</div>
			}

            <button type={"submit"}>Login</button>
            <div>{status}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
