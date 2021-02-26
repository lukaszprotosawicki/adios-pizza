import React from "react";
import instagram from "../img/instagram.jpg";
import facebook from "../img/facebook.png";

const ContainerTransport = () => {
  return (
    <>
      <div id="transport-scroll" className="container-transport">
        <div>
          <span className="text-transport">Sprawdż nasze </span>
          <p></p>
          <span className="text-transport-citys">
            Najlepsze promocje na facebook i instagram
          </span>
          <p className="border-bottom"></p>
          <span>Pamiętaj, że promocje nie łączą się. </span>

          <div className="social-media">
            {" "}
            <a href="https://instagram.com/adios_pizza?igshid=1e1rb05i9qynm">
              <img className="instagram" src={instagram} alt="Adios Pizza" />
            </a>
            <a href="https://m.facebook.com/adiospizzagorzow/">
              <img className="facebook" src={facebook} alt="Adios Pizza" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerTransport;
