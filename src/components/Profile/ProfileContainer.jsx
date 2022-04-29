import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatusProfile,
  updateStatusProfile,
} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.params.userId || 2;
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
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatusProfile,
    updateStatusProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
