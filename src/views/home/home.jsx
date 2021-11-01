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
<<<<<<< HEAD
          <div className="btn-init">
            <Button id="start" label="Iniciar" />
          </div>
=======
          <section className="btnInit">
            <Button id="start" label="Iniciar" />
          </section>
>>>>>>> 41c3d3f8d985ab25692098f1e37c1129778f7690
        </Link>

      </section >

      {/* <DeviceMesssagePhone /> */}
    </>
  );
}

export default Home;
