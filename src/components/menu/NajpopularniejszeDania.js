import React from "react";

const NajpopularniejszeDania = () => {
  return (
    <>
      <div className="products">
        <div className="menuRow">
          <div className="food">
            <h1 className="name">Pizza Adios</h1>
            <div className="name-info">
              <p className="p-name"> Do wyboru: 30cm lub 40cm.</p>
              <p className="p-name">
                z sosem Adios, serem, kurczakiem, szpinakiem, suszonymi
                pomidorami i cebulą
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Pizza Kurczak BBQ</h1>
            <div className="name-info">
              <p className="p-name"> Do wyboru: 30cm lub 40cm.</p>
              <p className="p-name">
                z sosem BBQ, serem, kurczakiem, salami, kukurydzą i czerwoną
                cebulą
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Pizza Mięsna Uczta</h1>
            <div className="name-info">
              <p className="p-name"> Do wyboru: 30cm lub 40cm.</p>
              <p className="p-name">
                {" "}
                z sosem pomidorowym, serem, bekonem, szynką, kurczakiem i salami
              </p>
            </div>
            <h1 className="price">25,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Pizza Ostra Karolina</h1>
            <div className="name-info">
              <p className="p-name"> Do wyboru: 30cm lub 40cm.</p>
              <p className="p-name">
                {" "}
                z sosem pomidorowym i carolina reaper, serem, bekonem, szynką i
                ostrymi papryczkami
              </p>
            </div>
            <h1 className="price">25,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Makaron szpinakowy</h1>
            <div className="name-info">
              <p className="p-name">
                z kurczakiem, czosnkiem, szpinakiem, sosem śmietanowym i
                zapiekanym serem
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
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
            <h1 className="name">kebab adios</h1>
            <div className="name-info">
              <p className="p-name">
                bułeczka własnego wypieku, sos Adios z czosnkowym, mięso kebab
                wołowe, mix sałat, świeży ogórek, pomidor, kukurydza, czerwona
                cebula lub prażona/do wyboru
              </p>
            </div>
            <h1 className="price">13,00</h1>
          </div>
          <div className="food">
            <h1 className="name">Frytki zapiekane z serem</h1>
            <div className="name-info">
              <p className="p-name">i sosem czosnkowym </p>
            </div>
            <h1 className="price">9,00</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NajpopularniejszeDania;
