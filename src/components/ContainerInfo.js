import React from "react";

const ContainerInfo = () => {
  return (
    <>
      <div className="backgrond-body-info">
        <div className="content-position">
          <div className="content-info">
            <div className="styles-welcome">
              <p className="container-contact-style">
                Zapraszamy do zamówień telefonicznych,{" "}
                <a href="www.pyszne.pl/menu/adios-pizza">na PYSZNE.PL</a>{" "}
                <p>lub</p> <p>odbiór osobisty w naszej pizzerii!!</p>
              </p>
            </div>
            <div className="styles-contact">
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
                <a href="www.pyszne.pl/adios-pizza">
                  www.pyszne.pl/menu/adios-pizza
                </a>{" "}
              </p>

              <p>🍕 tel: 796 717 650</p>
            </div>
            {/* <button>SPRAWDŹ NASZE MENU</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerInfo;
