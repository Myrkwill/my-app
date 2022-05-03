import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatusProfile,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData, setStatus) => {
	console.log(formData)
    saveProfile(formData, setStatus).then(() => {
      setEditMode(false);
    });
  };

  let profileImage = profile.photos.small || userPhoto;

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profileImage} className={styles.userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        <ProfileStatusWithHooks
          status={status}
          updateStatusProfile={updateStatusProfile}
        />

        <div>
          {editMode ? (
            <ProfileDataForm
              profile={profile}
              saveProfile={onSubmit}
            />
          ) : (
            <ProfileData
              goToEditMode={() => {
                setEditMode(true);
              }}
              profile={profile}
              isOwner={isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <h3>Имя: {profile.fullName}</h3>
      </div>
      <div>
        <h3>Обо мне: {profile.aboutMe}</h3>
      </div>

      <div>
        <h3>Ищу работу: </h3>
        {profile.lookingForAJob === true ? (
          <img
            className={styles.avaWorkStatus}
            src="https://c.tenor.com/oTeBa4EVepMAAAAC/business-cat-working.gif"
          ></img>
        ) : (
          <img
            className={styles.avaWorkStatus}
            src="https://previews.123rf.com/images/ratoca/ratoca1904/ratoca190400030/124066330-funny-cat-in-relax-moment.jpg"
          ></img>
        )}
      </div>

      <div>
        <h3>Мои профессиональные навыки: </h3>
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
