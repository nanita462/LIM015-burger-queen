import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import waiter from "../../assets/mesero.png";
import chef from "../../assets/chef.png";
//import { DeviceMesssagePhone } from "../../components/deviceMessage";
import '../../build/css/index.css'; // para aplicar estilo sass

function Rol() {
  return (
    <>
      <section className="container__User">

        <section className="rol_Waiter">
          <img className="img_Waiter" src={waiter} alt="waiter" />
          <Link to="/waiterOrder">
            <section className="btn__Waiter">
              <Button label="Mesero" />
            </section>
          </Link>
        </section>

        <section className="rol_Chef">
          <img className="img_Chef" src={chef} alt="chef" />
          <Link to="/chefOrder">
            <section className="btn__Chef">
              <Button label="Chef" />
            </section>
          </Link>
        </section>

      </section>
      {/* <DeviceMesssagePhone /> */}
    </>
  );
}

export default Rol;
