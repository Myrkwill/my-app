import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPost";

const MyPostsContainer = props => {
	let state = props.store.getState()

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let onPostChange = (text) => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};

	return <MyPosts
		posts={state.profilePage.posts}
		newPostText={state.profilePage.newPostText} 
		addPost={addPost} 
		uptateNewPostText={onPostChange}
	/>
};
export default MyPostsContainer;
