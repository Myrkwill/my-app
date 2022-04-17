import Users from "./Users"
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	}
}

let mapDisptchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDisptchToProps)(Users);

export default UsersContainer;
