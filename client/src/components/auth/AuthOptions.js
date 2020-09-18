import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <ul className="auth-options navbar-nav ml-auto">
      {userData.user ? (
        <>
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cetegories">Cetegories</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login" onClick={logout}>Log out</Link></li>
        </>
      ) : (
        <>
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cetegories">Cetegories</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register" onClick={register}>Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login" onClick={login}>Log in</Link></li>
        </>
      )}
    </ul>
  );
}
