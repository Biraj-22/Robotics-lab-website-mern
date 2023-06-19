import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/footer";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <>
      <div className="login-page">
        <form onSubmit={loginSubmit}>
          <h2>SignIn</h2>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            required
            autoComplete="on"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          />

          <div className="row d-flex">
            <button type="submit">SignIn</button>
            <Link to="/register">SignUp</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
