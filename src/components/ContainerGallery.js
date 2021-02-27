import React from "react";
import photo1 from "../img/pic13.jpg";
import photo2 from "../img/pic22.jpg";
import photo3 from "../img/pizza.jpg";
import photo4 from "../img/salate.jpg";
import photo5 from "../img/pic33.jpg";

const ContainerGallery = () => {
  return (
    <>
      <div className="container-gallery">
        <div>
          <span className="text-look">Zobacz naszą</span>
          <p></p>
          <span className="text-gallery">Galerię</span>
          <p className="border-bottom"></p>
        </div>
        <div className="container-photo-all">
          <img src={photo1} alt="Adios Pizza" />
          <img src={photo2} alt="Adios Pizza" />
          <img src={photo5} alt="Adios Pizza" />
          <img src={photo3} alt="Adios Pizza" />
          <img src={photo4} alt="Adios Pizza" />
        </div>

        {/* <button className="button-gallery ">
          <a className="button-gallery " href="#contact">
            WYGLĄDA PYSZNIE, ZAMAWIAM
          </a>
        </button> */}
      </div>
    </>
  );
};

export default ContainerGallery;
