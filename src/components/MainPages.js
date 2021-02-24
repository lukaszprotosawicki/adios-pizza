import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import logo from "../img/logo6.jpg";

const MainPages = () => {
  return (
    <>
      <div className="page-header">
        <div className="ui_container">
          <div className="navigation">
            {" "}
            <nav className="navigation-left">
              <li>
                <NavLink to={"/"}> START</NavLink>
              </li>
              <li className="nav-menu">
                🍕<NavLink to={"/"}> MENU</NavLink> 🍕
              </li>
              <li>
                <NavLink to={"/"}> PROMOCJE</NavLink>
              </li>
            </nav>
            <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
            <nav className="navigation-right">
              <li>
                <NavLink to={"/"}> DOSTAWA</NavLink>
              </li>
              <li>
                <NavLink to={"/"}> KONTAKT</NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPages;
