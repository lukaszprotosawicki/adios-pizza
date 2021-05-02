import React from "react";

const Salatki = () => {
  return (
    <>
      <div className="products">
        <div className="menuRow">
          <div className="food">
            <h1 className="name">Sałatka adios</h1>
            <div className="name-info">
              <p className="p-name">
                mix sałat, kurczak, szynka, świeży ogórek i pomidorki koktajlowe
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Sałatka drwala</h1>
            <div className="name-info">
              <p className="p-name">
                mix sałat, kurczak, kiełbasa, ser, ogórek kiszony, czerwona
                cebula, sos Adios chrzan i grzanka czosnkowa
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Sałatka grecka</h1>
            <div className="name-info">
              <p className="p-name">
                mix sałat, oliwki, pomidorki koktajlowe, świeży ogórek, feta,
                czerwona cebula, oliwa, czosnek i grzanka czosnkowa
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salatki;
