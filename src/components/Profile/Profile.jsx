import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";

const Profile = () => {
	return (
		<div className={styles.content}>
			<div>
				<img src='https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg' />
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile;