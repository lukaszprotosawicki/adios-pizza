import React from "react";

const Footer = () => {
  return (
    <>
      <div className="backgrond-body-footer">
        <div className="container-footer">
          <div className="styles-welcome">
            <p>
              Zapraszamy do zamówień telefonicznych <p>lub</p>{" "}
              <p>odbiór osobisty w naszej pizzerii!!</p>
            </p>
          </div>
          <div id="contact" className="styles-contact">
            <p>🍔🍕🍟 Adios Pizza - Pizzeria</p>
            <p>
              🍔🍕🍟 Gorzów Wielkopolski ul. Pułaskiego 50 (Lokal od ulicy
              Wróblewskiego)
            </p>
            <p>🍔🍕 www.adios-pizza.pl </p>
            <p>🍔🍕 tel: 796 71 76 50</p>
          </div>
          <button>PRZEJDŹ DO MENU</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
