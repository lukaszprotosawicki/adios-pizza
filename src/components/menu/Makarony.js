import React from "react";

const Makarony = () => {
  return (
    <>
      <div className="products">
        <div className="menuRow">
          <div className="food">
            <h1 className="name">Makaron Boloński</h1>
            <div className="name-info">
              <p className="p-name">
                z mięsem wieprzowo-wołowym, pastą pomidorową i zapiekanym serem
              </p>
            </div>
            <h1 className="price">20,00</h1>
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
            <h1 className="name">Makaron fresh</h1>
            <div className="name-info">
              <p className="p-name">
                z pomidorkami koktajlowymi, suszonymi pomidorami, fetą,
                gorgonzolą, czosnkiem, oliwą z oliwek i rukolą
              </p>
            </div>
            <h1 className="price">20,00</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Makarony;
