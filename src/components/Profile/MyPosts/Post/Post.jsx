import React from "react";
import styles from './Post.module.css'

const Post = () => {
	return (
		<div className={styles.item}>
			<img src="https://www.peta.org/wp-content/uploads/2017/09/Naruto-Selfie-Thumb.jpg" />
			post 1
			<div>
				<span>like</span>
			</div>
		</div>
	);
}

export default Post;