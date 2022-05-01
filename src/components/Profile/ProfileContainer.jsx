import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatusProfile,
  updateStatusProfile,
} from "../../redux/profileReducer";
import { useParams, useNavigate } from "react-router-dom";
import { compose } from "redux";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId;
	if (!userId) {
		userId = this.props.authorizedUserId;
		if (!userId) {
      		this.props.navigate({ pathname: "/login" }, { replace: true }); 
    	}
	}
    this.props.getUserProfile(userId);
    this.props.getStatusProfile(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusProfile={this.props.updateStatusProfile}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatusProfile,
    updateStatusProfile,
  }),
  withRouter,
)(ProfileContainer);
