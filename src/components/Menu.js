import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import NajpopularniejszeDania from "./menu/NajpopularniejszeDania.js";
import PizzaPietnastaka from "./menu/PizzaPietnastaka.js";
import PizzaDwaZero from "./menu/PizzaDwaZero.js";
import PizzaDwaPiec from "./menu/PizzaDwaPiec.js";
import Kebab from "./menu/Kebab.js";
import Makarony from "./menu/Makarony.js";
import Salatki from "./menu/Salatki.js";
import Dodatki from "./menu/Dodatki.js";
import Frytki from "./menu/Frytki.js";

const Menu = () => {
  return (
    <>
      <div id="menu" className="container-menu">
        <div className="menu-principal">
          <Router>
            <div className="menu-change">
              <NavLink
                activeClassName="active-link"
                to={"/najpopularniejsze-dania"}
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
              <Route
                exact
                path="/najpopularniejsze-dania"
                component={NajpopularniejszeDania}
              />
              <Route
                exact
                path="/pizza-za-pietnastaka"
                component={PizzaPietnastaka}
              />
              <Route exact path="/pizza-za-dwa-zero" component={PizzaDwaZero} />
              <Route exact path="/pizza-za-dwa-piec" component={PizzaDwaPiec} />
              <Route exact path="/frytki" component={Frytki} />
              <Route exact path="/kebab" component={Kebab} />
              <Route exact path="/makarony" component={Makarony} />
              <Route exact path="/salatki" component={Salatki} />
              <Route exact path="/dodatki" component={Dodatki} />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

export default Menu;
