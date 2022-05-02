import React from "react";
import profileReducer, {
  addPost,
  deletePost,
} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
};

test("length of posts should be incremented", () => {
  // Arrange && Act
  let action = addPost("it-kamasutra");
  let newState = profileReducer(state, action);

  // Assert
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  // Arrange && Act
  let action = addPost("it-kamasutra.com");
  let newState = profileReducer(state, action);

  // Assert
  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it("after deleting length of messages should be decrement", () => {
  // Arrange && Act
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  // Assert
  expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // Arrange && Act
  let action = deletePost(1000);
  let newState = profileReducer(state, action);

  // Assert
  expect(newState.posts.length).toBe(4);
});