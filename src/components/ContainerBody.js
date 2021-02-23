import React from "react";
import backgrondBody from "../img/baner2.jpg";

const ContainerBody = () => {
  return (
    <>
      <div className="backgrond-body">
        <img
          className="background-body-img"
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
          <button>ZOBACZ MENU</button>
        </div>
      </div>
    </>
  );
};

export default ContainerBody;
