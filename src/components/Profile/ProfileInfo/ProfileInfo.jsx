import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return null;
  }
  return (
    <div>
      <div>
        <img src="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg" />
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.small} />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
