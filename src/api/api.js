import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "261e9fb5-997f-4a98-ad27-46c68aa59795",
  },
});

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const usersAPI = {
  getProfile(userId) {
	  console.log("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
  getUsers(page = 1, count = 10) {
    return instance
      .get(`users?page=${page}&count=${count}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post("follow/" + userId).then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete("follow/" + userId)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
