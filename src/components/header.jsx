import React, { useState } from "react";
import logo from "../assets/logoBQ.png";
import usePreparedOrdersCount from "./preparedOrdersCount.jsx";
import Modal from "../views/modal/modal.jsx";
import PreparedOrdersList from "../views/chef/PreparedOrdersList.jsx";
import './header.scss'
//import "../build/css/index.css"; // para aplicar estilo sass

function Header(props) {
  const preparedOrdersCount = usePreparedOrdersCount();
  const [open, setOpen] = useState(false);

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
        <section className="orders-alert">
          <section className="pending-order-number"> {preparedOrdersCount} </section>
          <section className="pending-order-text">
          
            <p
              
              onClick={() => {
                setOpen(true);
              }}
            >Pedidos listos</p>
         
          </section>
          <Modal open={open} close={() => setOpen(false)}>
            <PreparedOrdersList />
          </Modal>
        </section>
      </section>
    </section>
  );
}
export default Header;
