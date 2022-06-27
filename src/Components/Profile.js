import React from "react";
import DropBox from "./DropBox";
import "../Styles/Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="upload-area">
        <DropBox />
      </div>
      <div className="info-area">
        <div className="input-fields">
          <div className="input-label">Name</div>
          <input type="text" name="Name" id="name" className="input-box"/>
        </div>
        <div className="input-fields">
          <div className="input-label">Email-ID</div>
            <input type="email" name="Email" id="email" className="input-box"/>
        </div>
        <button className="btn-save">
          Save
        </button>
        {/* <button className="btn-save btn-edit">
          Edit
        </button> */}
      </div>
      <div className="info-area">
        <div className="input-label">Short Bio</div>
        <textarea className="input-box text-area"/>
      </div>
    </div>
  );
};

export default Profile;
