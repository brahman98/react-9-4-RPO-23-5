// import { useState } from "react";
// import Post from "./Post";
// import avatar from "../assets/r.png"
// import { useUser } from "../context/UserContext";
import useUserProfile from "../hooks/useUserProfile";

function ProfileCard() {

  const { userName, avatar } = useUserProfile();
  return (
    <section className="profile-card">
      <div className="profile">
        <div className="avatar">
          {avatar ? (
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className="profile-avatar"
                    />
                ) : (
                    <div className="avatar-placeholder">
                      {/* V */}
                        {userName.charAt(0).toUpperCase() || "?"}
                    </div>
                )}
        </div>
        <div className="profile-info">
          <h2>{userName}</h2>
          <p>@nickname</p>
        </div>
        <p className="profile-description">айти препод в колледже TOP</p>
      </div>
    </section>
  );
}

export default ProfileCard;
