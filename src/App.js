import MainPages from "./components/MainPages";
import React from "react";
import ContainerBody from "./components/ContainerBody";
import ContainerInfo from "./components/ContainerInfo";
import ContainerGallery from "./components/ContainerGallery";
import Footer from "./components/Footer.js";
import FooterInfo from "./components/FooterInfo.js";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ContainerTransport from "./components/ContainerTransport";
import ContainerPromotion from "./components/ContainerPromotion";

function App() {
  return (
    <Router>
      <MainPages />
      <ContainerBody />
      <ContainerInfo />
      <ContainerPromotion />
      <ContainerGallery />
      <ContainerTransport />
      <Footer />
      <FooterInfo />
      <Switch>
        {/* <Route exact path="/" component={} />

        <Route path="/login" component={} />
        <Route path="/signup" component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
