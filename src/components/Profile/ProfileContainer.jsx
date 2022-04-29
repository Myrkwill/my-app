import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let withAuthRedirectComponent = withAuthRedirect(ProfileContainer);
let withRouterComponent = withRouter(withAuthRedirectComponent);

export default connect(mapStateToProps, {
  getUserProfile,
})(withRouterComponent);
