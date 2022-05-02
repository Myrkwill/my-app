import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
	auth: authReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
