import React from "react";
import logo from "../assets/logoBQ.png";
import "./HeaderChef.scss";

function HeaderChef(props) {
  return (
    <section className="header_nav">
      <section className="header_nameRol">
        <img className="littleLogo" src={logo} alt="logo" />
        <p>{props.rol}</p>
      </section>
      <section className="nav">
        <a href="/">
          <span>
            <i className="fas fa-home"></i>
          </span>
          Inicio
        </a>
        <a href="/rol">
          <span>
            <i className="fas fa-user-friends"></i>
          </span>
          Rol
        </a>


      </section>

    </section>
  );
}
export default HeaderChef;
