import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/Reducers/userReducer";
import Navbar from "../../components/Navbar/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen_body">
        <h1> profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="logo"
          />
          <div className="profileScreen_details">
            <h2>Email: {user.email}</h2>

            <button className="profileScreen_signOut" onClick={logout}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
