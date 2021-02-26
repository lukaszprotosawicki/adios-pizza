import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import logo from "../img/logoprincipal.png";

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
                <NavLink to={"/"}>
                  {" "}
                  <a className="scroll" href="#promotion">
                    PROMOCJE
                  </a>
                </NavLink>
              </li>
            </nav>
            <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
            <nav className="navigation-right">
              <li>
                <NavLink to={"/"}>
                  {" "}
                  <a className="scroll" href="#transport">
                    DOSTAWA
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"}>
                  {" "}
                  <a className="scroll" href="#contact">
                    KONTAKT
                  </a>{" "}
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPages;
