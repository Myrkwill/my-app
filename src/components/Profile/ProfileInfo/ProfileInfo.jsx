import React from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatusProfile}) => {
  if (!profile) {
    return null;
  }
  let profileImage = profile.photos.small || userPhoto;
  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profileImage} className={styles.userPhoto} />
        <ProfileStatusWithHooks
          status={status}
          updateStatusProfile={updateStatusProfile}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
