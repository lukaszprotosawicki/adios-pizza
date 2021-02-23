import React from "react";
import logo from "../img/logo6.jpg";

const MainPages = () => {
  return (
    <>
      <div className="page-header">
        <div className="ui_container">
          <div className="logo">
            {" "}
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
