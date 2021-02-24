import React from "react";
import backgrondInfo1 from "../img/pic1.jpg";
import backgrondInfo2 from "../img/pic2.jpg";

const ContainerInfo = () => {
  return (
    <>
      <div className="backgrond-body-info">
        <div className="content-position">
          <div className="content-info">
            <div className="styles-welcome">
              <p>
                Zapraszamy do zamówień telefonicznych <p>lub</p>{" "}
                <p>odbiór osobisty w naszej pizzerii!!</p>
              </p>
            </div>
            <div className="styles-contact">
              <p>🍔🍕🍟 Adios Pizza - Pizzeria</p>
              <p>
                🍔🍕🍟 Gorzów Wielkopolski ul. Pułaskiego 50 (Lokal od ulicy
                Wróblewskiego)
              </p>
              <p>🍔🍕 www.adios-pizza.pl </p>
              <p>🍔🍕 tel: 796 71 76 50</p>
            </div>
            <button>SPRAWDŹ NASZE MENU</button>
          </div>
          <div className="content-gallery">
            <img
              className="background-info-img1"
              src={backgrondInfo1}
              alt="Adios Pizza"
            />
            <img
              className="background-info-img2"
              src={backgrondInfo2}
              alt="Adios Pizza"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerInfo;
