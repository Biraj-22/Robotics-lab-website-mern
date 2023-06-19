import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assest/images/brl1.png";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [menu, setMenu] = useState(false);

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Blog</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const toggleMenu = () => setMenu(!menu);
  console.log(toggleMenu);
  const styleMenu = {
    left: menu ? 0 : "-100%",
  };
  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">
            {isAdmin ? (
              "Admin"
            ) : (
              <img className="logo-header" src={logo} alt="" />
            )}
          </Link>
        </h1>
      </div>

      <ul style={styleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>

        <li>
          <Link to="/blog">{isAdmin ? "Curd" : "News & Events"}</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">SIGN IN & SIGN UP</Link>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
