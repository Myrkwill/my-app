import { authAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const authMe = () => async (dispatch) => {
  let data = await authAPI.authMe();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, setStatus) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    switch (data.resultCode) {
      case 0:
        dispatch(authMe());
        break;
      case 1:
        setStatus(data.messages);
        break;
      default:
        setStatus("Unknown error");
        break;
    }
  };

export const logout = () => async (dispatch) => {
  let data = authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
