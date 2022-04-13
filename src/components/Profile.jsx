import React from "react";
import styles from './Profile.module.css'

const Profile = () => {
	return (
		<div className={styles.content}>
			<div>
				<img src='https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg' />
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
			</div>
			<div className={styles.posts
			}>
				<div className={ styles.item }>post 1</div>
				<div className={ styles.item }>post 2</div>
			</div>
		</div>
	);
}

export default Profile;