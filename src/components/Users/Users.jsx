import React from "react"
import styles from "./Users.module.css"

let Users = (props) => {
	if (props.users.length === 0) {
		let photoUrl = "https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc"
		props.setUsers([
			{
				id: 1,
				photoUrl: photoUrl,
				followed: false,
				fullName: "Dmitry",
				status: "I am a boss",
				location: { city: "Minsk", country: "Belarus" }
			},
			{
				id: 2,
				photoUrl: photoUrl,
				followed: true,
				fullName: "Sasha",
				status: "I am a boss too",
				location: { city: "Moscow", country: "Russia" }
			},
			{
				id: 3,
				photoUrl: photoUrl,
				followed: false,
				fullName: "Andrew",
				status: "I am a boss too",
				location: { city: "Kiev", country: "Ukraine" }
			}
		]);
	}

	return (
		<div>{
			props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} className={styles.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { props.follow(u.id) }}>Follow</button>
							}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>
			))
		}</div>
	)
}

export default Users