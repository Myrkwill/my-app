import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
	return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatusProfile={props.updateStatusProfile}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;