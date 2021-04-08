import MainPages from "./components/MainPages";
import React from "react";
import ContainerBody from "./components/ContainerBody";
import ContainerInfo from "./components/ContainerInfo";
import ContainerGallery from "./components/ContainerGallery";
import Footer from "./components/Footer.js";
import FooterInfo from "./components/FooterInfo.js";
import Menu from "./components/Menu.js";
import ContainerTransport from "./components/ContainerTransport";
import ContainerPromotion from "./components/ContainerPromotion";

function App() {
  return (
    <>
      <MainPages />
      <ContainerBody />
      <Menu />
      <ContainerInfo />
      <ContainerPromotion />
      <ContainerGallery />
      <ContainerTransport />
      <Footer />
      <FooterInfo />
    </>
  );
}

export default App;
