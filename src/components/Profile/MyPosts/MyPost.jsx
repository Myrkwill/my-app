import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

	let postsData = [
		{ id: 1, message: 'message1', likesCount: 12 },
		{ id: 2, message: 'message2', likesCount: 0 },
		{ id: 3, message: 'message3', likesCount: 7 },
		{ id: 4, message: 'message4', likesCount: 2 },
	]

	let meassageElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

	return (
		<div className={styles.postsBlock}>
			<div>
				<h3>My posts</h3>
				<div>
					<div>
						<textarea></textarea>
					</div>
					<div>
						<button>Add post</button>
					</div>
				</div>
			</div>
			<div className={styles.posts}>
				{meassageElements}
			</div>
		</div>
	);
}

export default MyPosts;