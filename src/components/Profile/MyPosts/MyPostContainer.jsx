import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPost";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts
	}
}

let mapDisptchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => { 
			dispatch(addPost(newPostText)); 
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDisptchToProps)(MyPosts)

export default MyPostsContainer
