import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPost";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDisptchToProps = (dispatch) => {
	return {
		addPost: () => { 
			dispatch(addPostActionCreator()) 
		}, 
		uptateNewPostText: (text) => { 
			dispatch(updateNewPostTextActionCreator(text)) 
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDisptchToProps)(MyPosts)

export default MyPostsContainer
