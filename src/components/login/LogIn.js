import React, { useState, useEffect, useRef } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./LogIn.module.css";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const auth = useAuth();
  console.log(auth);
  const [username, setUsername] = useState("");
  const [validUser, setValidUser] = useState(true);
  const [userFocus, setUserFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const userRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const USER_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9].{5,}$/;
    userRef.current.focus();
    setValidUser(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    const PASSWORD_REGEX =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    setValidPassword(PASSWORD_REGEX.test(password));
  }, [password]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === "john123" && password === "John@123") {
      auth.login();
      navigate("/dashboard");
    }
  };

  return (
    <div className={style.rootContainer}>
      <div className={style.logInContainer}>
        <p className={style.loginText}>Log In</p>
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className={style.userInput}>
              <label htmlFor="username" className={style.label}>
                Username:
              </label>
              <input
                className={style.input}
                id="username"
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onClick={() => setUserFocus(true)}
                autoComplete="false"
                ref={userRef}
              />
            </div>
            {!validUser && userFocus && (
              <div className={style.requiredConditionBox}>
                <div className={style.requiredCondition}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={style.icon}
                  />
                  <p>
                    Min 6 letter username, with at least 1 lower case letters
                    and a number.Special characters are not allowed.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className={style.userInput}>
              <label htmlFor="password" className={style.label}>
                Password:
              </label>
              <input
                className={style.input}
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => setPasswordFocus(true)}
              />
            </div>
            {!validPassword && passwordFocus && (
              <div className={style.requiredConditionBox}>
                <div className={style.requiredCondition}>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    className={style.icon}
                  />
                  <p>
                    Min 8 letter password, with at least a symbol, upper and
                    lower case letters and a number
                  </p>
                </div>
              </div>
            )}
          </div>
          <button
            className={style.button}
            disabled={!validUser || !validPassword}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
