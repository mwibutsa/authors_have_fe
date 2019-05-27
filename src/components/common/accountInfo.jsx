import React from 'react';
import { Link } from 'react-router-dom';
import ProfileButton from './profileButton';
import UploadImageForm from './UploadImageForm';
import '../../styles/css/profile.css';

const AccountInfo = ({
  image,
  name,
  bio,
  totalFollowers,
  totalFollowings,
  username,
  owner,
  handleClick,
  showAddImageForm,
  currentValues: currentUserInfo,
}) => {
  return (
    <div className="user-account-info" test-data="accountInfoComponent">
      <div className="user-account-flex">
        <div className="img-container">
          <img src={image} alt="" />
          <button
            className="add-img-toggler"
            type="button"
            onClick={showAddImageForm.toggleForm}
          >
            +
          </button>

          {owner && showAddImageForm.visible && (
            <UploadImageForm
              toggleForm={showAddImageForm.toggleForm}
              currentUserInfo={currentUserInfo}
            />
          )}
        </div>
        <div>
          <div className="info-container">
            <span className="name">{name}</span>
            <br />
            <span className="username">{`@${username}`}</span>
            <ProfileButton label="Edit Profile" handleClick={handleClick} />
            <br />
            <span className="bio">{bio}</span>
          </div>
        </div>
      </div>
      <div className="statistics">
        <Link to="/profile" className="stat-label">
          <span className="label">Followers</span>
          <br />
          <span className="value">{totalFollowers}</span>
        </Link>
        <Link to="/profile" className="stat-label">
          <span className="label">Following</span>
          <br />
          <span className="value">{totalFollowings}</span>
        </Link>
        <Link to="/profile" className="stat-label">
          <span className="label">Articles</span>
          <br />
          <span className="value">8</span>
        </Link>
      </div>
    </div>
  );
};

export default AccountInfo;
