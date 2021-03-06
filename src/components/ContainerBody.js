import React from "react";
import backgrondBody from "../img/123456.jpg";

const ContainerBody = () => {
  return (
    <>
      <div className="backgrond-body">
        <img
          className="background-body-img bgc-body-img-zoom"
          src={backgrondBody}
          alt="Adios Pizza"
        />
        <div className="container-body">
          <span className="text-kitchen">
            Wyjątkowa kuchnia, w której mile zaskoczymy
          </span>
          <p></p>
          <span className="text-pizza">NIE TYLKO SMAKOSZY PIZZY</span>
          <p className="border-bottom"></p>
          <button className="button-styles-body">
            <a href="https://www.pyszne.pl/menu/adios-pizza"> Zamów online</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContainerBody;
