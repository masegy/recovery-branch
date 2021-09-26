import React, { useState } from "react";
import Logo from "../../assets/Logo_dekstop.png";
import "./Login_register.scss";
import { Link, useHistory } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function LoginPages({setLogoutUser}) {
  // const userContext = React.useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const onLogin = (e) => {
    // if (email.length > 0 && password.length > 4) {
    //   //   console.log(">>", email, password);
    //   userContext.login(email, password);
    // }
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
        history.push("/");
      })
      .catch((error) => setError(error.response.data.message));
  };

  return (
    <div className="LoginPage-container">
      <div className="box">
        <img src={Logo} alt="Logo_BRI_Dekstop" />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="input-field">
          <i>
            <FontAwesomeIcon icon="user" />
          </i>
          <input
            type="email"
            placeholder="Username(email)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <i>
            <FontAwesomeIcon icon="lock" />
          </i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" onClick={onLogin}>
          login
        </button>
        <p className="akun">
          Belum mempunyai akun ?{" "}
          <span>
            <Link className="link" to="/register">
              register
            </Link>
            {/* <button className="link" component={Link} to="/register">Register</button> */}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPages;
