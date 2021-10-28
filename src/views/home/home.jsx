import React from "react";
import Button from "../../components/primaryButton.jsx";
import { Link } from "react-router-dom";
import Bqueen from "../../assets/logoBQ.png";
import { DeviceMesssagePhone } from "../../components/deviceMessage.jsx"
import "./home.scss";

function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <img className="home-img" src={Bqueen} alt="home" />
        <Link to="/rol">
          <div className="btn-init">
            <Button id="start" label="START" />
          </div>
        </Link>
      </div>
      <DeviceMesssagePhone />
    </div>
  );
}

export default Home;
