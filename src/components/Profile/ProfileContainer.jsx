import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate, useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId || 2;
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
})(withRouter(ProfileContainer));
