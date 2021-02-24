import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import logo from "../img/logo6.jpg";

const MainPages = () => {
  return (
    <>
      <div className="page-header">
        <div className="ui_container">
          <div className="logo">
            {" "}
            <nav>
              <NavLink to={"/"}> About Me</NavLink>
              <NavLink activeClassName="active-link" to={"/projects"}>
                Projects
              </NavLink>
              <NavLink activeClassName="active-link" to={"/contact"}>
                Contact
              </NavLink>
              <NavLink activeClassName="active-link" to={"/weather"}>
                Weather
              </NavLink>
            </nav>
            <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPages;
