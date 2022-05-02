import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";
import store from "./redux/reduxStore";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

import { initializeApp } from "../src/redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


export class App extends Component {

componentDidMount() {
	this.props.initializeApp();
}

  render() {
	  if(!this.props.initialized) {
		  return <Preloader />
	  }
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>

              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />

              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);


const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;
