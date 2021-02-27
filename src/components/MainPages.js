import React from "react";
import logo from "../img/logoprincipal.png";
import Burger from "./scss/navigation/Burger";

const MainPages = () => {
  return (
    <>
      <div id="topmain" className="page-header">
        <div className="ui_container">
          <div className="navigation">
            {" "}
            <nav className="navigation-left">
              <li>
                <a className="scroll" href="#top-main">
                  START
                </a>
              </li>
              <li>
                🍕
                <a className="scroll menuposition" href="#menu">
                  MENU
                </a>
                🍕
              </li>

              <li>
                <a className="scroll" href="#promotion">
                  PROMOCJE
                </a>
              </li>
            </nav>
            <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
            <nav className="navigation-right">
              <li>
                <a className="scroll" href="#transport">
                  DOSTAWA
                </a>
              </li>
              <li>
                <a className="scroll" href="#contact">
                  KONTAKT
                </a>
              </li>
            </nav>
          </div>
        </div>
        <Burger />
      </div>
    </>
  );
};

export default MainPages;
