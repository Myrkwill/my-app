import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field } from "formik";

const MyPosts = React.memo(props => {

	let postsElements = [...props.posts]
    .reverse()
    .map((p) => <Post message={p.message} likesCount={p.likesCount} />);

	let addNewPost = (post) => {
		props.addPost(post)
	};

	return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm addNewPost={addNewPost}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
});

const AddPostForm = (props) => {
  return (
    <Formik
      initialValues={{
        newPostText: "",
      }}
      onSubmit={(values, { resetForm }) => {
        props.addNewPost(values.newPostText);
        resetForm({ values: "" });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name={"newPostText"}
              as={"textarea"}
              placeholder={"Enter post text"}
            />
          </div>

          <button type={"submit"}>Add Post</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyPosts;
