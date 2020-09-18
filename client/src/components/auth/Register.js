import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/login");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="row justify">
          <div className="col-md-8 col-md-offset-2">
            <div className="register-form"></div>
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <input
          id="register-email"
          placeholder="Email"
          className="form-control"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          id="register-password"
          placeholder="Password"
          className="form-control"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <input
          id="register-display-name"
          className="form-control"
          placeholder="Display name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      </div>
          </div>
        </div>
      </div>
  );
}
