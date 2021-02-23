import MainPages from "./components/MainPages";
import React from "react";
import ContainerBody from "./components/ContainerBody";
import ContainerInfo from "./components/ContainerInfo";
import ContainerGallery from "./components/ContainerGallery";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <MainPages />
      <ContainerBody />
      <ContainerInfo />
      <ContainerGallery />
      <Footer />
    </>
  );
}

export default App;
