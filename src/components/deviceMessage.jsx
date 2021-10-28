import React from "react";
//import Phone from "../assets/phone.png";
import "./deviceMessage.scss";

export function DeviceMesssagePhone() {
  return (
    <div className="device-message-container">
      {/* <img
        className="phone-message-image"
        //src={Phone}
        alt="Phone-message"
      /> */}
      <h2 className="phone-message">
        This application is not available on this device, to access it use a
        tablet or a computer or turn your device around.
      </h2>
    </div>
  );
}
