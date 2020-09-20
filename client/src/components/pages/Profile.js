import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function Profile() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page backgroundAddImage">
      <div className="Profile">
      {userData.user ? (
        <h1>Welcome {userData.user.username}</h1>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
      )}
      </div>
    </div>
  );
}
