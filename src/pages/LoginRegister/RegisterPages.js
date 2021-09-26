import React from "react";
import Logo from "../../assets/Logo_dekstop.png";
import "./Login_register.scss";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function RegisterPages({ setLogoutUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");
  let history = useHistory();

  const onRegister = (e) => {
    // console.log(">>", username, password);
    if (email.length > 0 && password.length > 4) {
      if (password !== confirmPassword) {
        alert("password did not match");
        return;
      }
      //   console.log(">>", "register");
      e.preventDefault();
      axios
        .post("http://localhost:5000/api/auth/register", {
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
          history.push("/login");
        })
        .catch((error) => setError(error.response.data.message));
    }
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
        <div className="input-field">
          <i>
            <FontAwesomeIcon icon="lock" />
          </i>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn" onClick={onRegister}>
          Register
        </button>
        <p className="akun">
          Sudah mempunyai akun ?{" "}
          <span>
            <Link className="link" to="/login">
              login
            </Link>
            {/* <button className="link">Login</button> */}
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPages;
