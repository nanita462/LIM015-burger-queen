import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import waiter from "../../assets/mesero.png";
import chef from "../../assets/chef.png";
import { DeviceMesssagePhone } from "../../components/deviceMessage";
//import "../../sass/rol.scss";

function Rol() {
  return (
    <div className="rol-container">
      <div className="rol-box">
        <div className="waiter-out">
          <Link to="/waiterOrder">
            <Button label="WAITER" />
          </Link>
          <div className="waiter-inner">
            <img src={waiter} alt="waiter" />
          </div>
        </div>
        <div>
          <div className="chef-out">
            <Link to="/chefOrder">
              <Button label="CHEF" />
            </Link>
          </div>
          <div className="chef-inner">
            <img src={chef} alt="chef" />
          </div>
        </div>
      </div>
      <DeviceMesssagePhone />
    </div>
  );
}

export default Rol;
