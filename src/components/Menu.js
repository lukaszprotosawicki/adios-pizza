import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import PopularDishes from "./menu/PopularDishes.js";
import PizzaFifteenak from "./menu/PizzaFifteenak.js";
import PizzaTwoZero from "./menu/PizzaTwoZero.js";
import PizzaTwoFive from "./menu/PizzaTwoFive.js";
import Kebab from "./menu/Kebab.js";
import Pasta from "./menu/Pasta.js";
import Salads from "./menu/Salads.js";
import Additives from "./menu/Additives.js";
import Chips from "./menu/Chips.js";

const Menu = () => {
  return (
    <>
      <div id="menu" className="container-menu">
        <div className="menu-principal">
          <Router>
            <div className="menu-change">
              <NavLink
                activeClassName="active-link"
                to={"/NajpopularniejszeDania"}
              >
                Najpopularniejsze Dania
              </NavLink>
              <NavLink
                activeClassName="active-link"
                to={"/pizza-za-pietnastaka"}
              >
                Pizza Pietnastak
              </NavLink>
              <NavLink activeClassName="active-link" to={"/pizza-za-dwa-zero"}>
                Pizza Dwa Zero
              </NavLink>
              <NavLink activeClassName="active-link" to={"/pizza-za-dwa-piec"}>
                Pizza Dwa Piec
              </NavLink>
              <NavLink activeClassName="active-link" to={"/frytki"}>
                Zapiekane Frytki
              </NavLink>
              <NavLink activeClassName="active-link" to={"/kebab"}>
                Kebab
              </NavLink>
              <NavLink activeClassName="active-link" to={"/makarony"}>
                Makarony
              </NavLink>
              <NavLink activeClassName="active-link" to={"/salatki"}>
                Sałatki
              </NavLink>
              <NavLink activeClassName="active-link" to={"/dodatki"}>
                Dodatki
              </NavLink>
            </div>
            <Switch>
              <Route exact path="/" component={PopularDishes} />
              <Route
                exact
                path="/NajpopularniejszeDania"
                component={PopularDishes}
              />
              <Route path="/pizza-za-pietnastaka" component={PizzaFifteenak} />
              <Route exact path="/pizza-za-dwa-zero" component={PizzaTwoZero} />
              <Route exact path="/pizza-za-dwa-piec" component={PizzaTwoFive} />
              <Route exact path="/frytki" component={Chips} />
              <Route exact path="/kebab" component={Kebab} />
              <Route exact path="/makarony" component={Pasta} />
              <Route exact path="/salatki" component={Salads} />
              <Route exact path="/dodatki" component={Additives} />
            </Switch>
          </Router>
        </div>
        <div className="menu-button">
          <p className="menu-button-style">
            <a href="https://www.pyszne.pl/menu/adios-pizza"> Zamów online</a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Menu;
