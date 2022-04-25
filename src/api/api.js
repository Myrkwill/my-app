import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "261e9fb5-997f-4a98-ad27-46c68aa59795",
  },
});

export const usersAPI = {
  getUsers(page = 1, count = 10) {
    return instance
      .get(`users?page=${page}&count=${count}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post("follow/" + userId).then((response) => response.data);
  },
  unfollow(userId) {
    return instance.delete("follow/" + userId).then((response) => response.data);
  },
};
