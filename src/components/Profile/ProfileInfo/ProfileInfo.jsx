import React from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../accets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return null;
  }
  let profileImage = props.profile.photos.small || userPhoto;
  return (
    <div>
      {/* <div>
        <img src="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg" />
      </div> */}
      <div className={styles.descriptionBlock}>
        <img src={profileImage} className={styles.userPhoto} />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatusProfile={props.updateStatusProfile}
        />
        {/* ava + description */}
      </div>
    </div>
  );
};

export default ProfileInfo;
