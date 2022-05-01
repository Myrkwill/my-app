import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authMe, logout } from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  authMe, logout
})(HeaderContainer);
