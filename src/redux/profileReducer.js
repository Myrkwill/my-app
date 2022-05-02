import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "samurai-network/profile/ADD-POST";
const SET_USER_PROFILE = "samurai-network/profile/SET_USER_PROFILE";
const SET_STATUS_PROFILE = "samurai-network/profile/SET_STATUS_PROFILE";
const DELETE_POST = "samurai-network/profile/DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS_PROFILE: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatusProfile = (status) => ({
  type: SET_STATUS_PROFILE,
  status,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatusProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatusProfile(data));
};

export const updateStatusProfile = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatusProfile(status));
  }
};

export default profileReducer;
