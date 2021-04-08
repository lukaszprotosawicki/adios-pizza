import React from "react";
import logo from "../img/logoprincipal.png";

const Footer = () => {
  return (
    <>
      <div className="backgrond-body-footer">
        <div className="container-footer">
          <div className="logo-footer">
            {" "}
            <a href="/">
              <img src={logo} alt="Adios Pizza" />
            </a>
          </div>
          <div className="welcome-contact">
            <div className="styles-welcome">
              <p className="container-contact-style">
                Zapraszamy do zamówień telefonicznych,{" "}
                <a href="www.pyszne.pl/menu/adios-pizza">na PYSZNE.PL</a>{" "}
                <p>lub</p> <p>odbiór osobisty w naszej pizzerii!!</p>
              </p>
            </div>
            <div id="contact" className="styles-contact">
              <p>🍕🍟 Adios Pizza - Pizzeria</p>
              <p>
                🍕🍟 Gorzów Wielkopolski ul. Pułaskiego 50 (Lokal od ulicy
                Wróblewskiego)
              </p>
              <p className="contact-style">
                🍕 <a href="www.adiospizza.pl">www.adiospizza.pl</a>{" "}
              </p>
              <p className="contact-style">
                🍕{" "}
                <a href="www.pyszne.pl/menu/adios-pizza">
                  www.pyszne.pl/adios-pizza
                </a>{" "}
              </p>
              <p>🍕 tel: 796 717 650</p>
            </div>
          </div>
          <div>
            {/* <button className="button-footer">PRZEJDŹ DO MENU</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
