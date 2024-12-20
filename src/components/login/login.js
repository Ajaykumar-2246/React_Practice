import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../reduxtool/action";

function Login() {
  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [usererror, setUserError] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let loggedIn = useSelector((state) => state.counter.loggedIn);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const nameEnter = (event) => {
    setUserName(event.target.value);
  };

  const passwordEnter = (event) => {
    setPassword(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch(
        loginAction({
          name: username,
          password: password,
        })
      );
      return;
    }

    if (!username) {
      setUserError("Please enter username");
    } else {
      setUserError("");
    }

    if (!password) {
      setPasswordError("Please enter password");
    } else {
      setPasswordError("");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn,navigate]);

  return (
    <div className="login">
      <form>
        <h1 className="header">Login</h1>
        <label htmlFor="username">Name</label>
        <input
          className="input"
          type="text"
          id="username"
          value={username}
          onChange={nameEnter}
          placeholder="enter your name.."
        />
        {usererror && <div className="hidden-msg">{usererror}</div>}
        <label htmlFor="password">password</label>
        <input
          className="input"
          type="password"
          id="password"
          value={password}
          onChange={passwordEnter}
          placeholder="enter your password.."
        />
        {passworderror && <div className="hidden-msg">{passworderror}</div>}
        <input
          className="button"
          type="submit"
          onClick={submit}
          value="submit"
        />
      </form>
    </div>
  );
}

export default Login;
