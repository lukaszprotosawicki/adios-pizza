import React from "react";
import backgrondBody from "../img/baner2.jpg";

const ContainerBody = () => {
  return (
    <>
      <div className="backgrond-body">
        <img src={backgrondBody} alt="Adios Pizza" />
        <div className="container-body">
          <span>Wyjątkowa kuchnia, w której mile zaskoczymy</span>
          <p></p>
          <span>NIE TYLKO SMAKOSZY PIZZY</span>
          <p></p>
          <button>ZOBACZ MENU</button>
        </div>
      </div>
    </>
  );
};

export default ContainerBody;
