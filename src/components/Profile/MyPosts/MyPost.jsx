import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const MyPosts = props => {
	let postsElements = props.posts.map(p => (
		<Post message={p.message} likesCount={p.likesCount} />
	))

	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	};

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.uptateNewPostText(text)
	};

	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
