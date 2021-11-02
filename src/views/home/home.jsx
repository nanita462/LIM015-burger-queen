import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import logo from "../../assets/logoBQ.png";
//import { DeviceMesssagePhone } from "../../components/deviceMessage.jsx"
import '../../build/css/index.css'; // para aplicar estilo sass

function Home() {
  return (
    <>
      <section className="secInit" >
        <img src={logo} className="logo" alt="logoBQ" />

        <Link to="/rol">
          <section className="btnInit">
            <Button id="start" label="Iniciar" />
          </section>
        </Link>

      </section >

      {/* <DeviceMesssagePhone /> */}
    </>
  );
}

export default Home;
