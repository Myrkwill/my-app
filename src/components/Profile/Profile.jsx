import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts />
		</div>
	);
}

export default Profile;