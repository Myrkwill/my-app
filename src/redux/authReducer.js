import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const authMe = () => async (dispatch) => {
  let data = await authAPI.authMe();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    switch (data.resultCode) {
      case 0:
        dispatch(authMe());
        break;
      case 10:
        dispatch(getCaptchaUrl());
        break;
      default:
        let message =
          data.messages.length > 0 ? data.messages[0] : "Some error";
        setStatus(message);
        break;
    }
  };

export const logout = () => async (dispatch) => {
  let data = authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
