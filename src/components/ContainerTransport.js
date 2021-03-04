import React from "react";

const ContainerTransport = () => {
  return (
    <>
      <div id="transport" className="container-transport">
        <div>
          <span className="text-transport">Dostarczamy na terenie </span>
          <p></p>
          <span className="text-transport-citys">Gorzowa Wlkp. i okolice</span>

          <iframe
            className="googlemap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.6772919964553!2d15.24357354844413!3d52.75211360616043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4707211b0e70283d%3A0x69a6d4999bd38a01!2sAdios%20Pizza!5e0!3m2!1spl!2spl!4v1614852245719!5m2!1spl!2spl"
            width="80%"
            height="450px"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <span className="text-transport">
            Dowóz na terenie Gorzowa Wlkp. powyżej 25 zł GRATIS!!{" "}
          </span>
          <span className="text-transport-citys">
            ZADZWOŃ: <p></p>796 717 650{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContainerTransport;
