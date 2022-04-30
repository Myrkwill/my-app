import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
	return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatusProfile={props.updateStatusProfile}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;