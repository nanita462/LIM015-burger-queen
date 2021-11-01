import React, { useState } from "react";
import logo from "../assets/logoBQ.png";
import ordersIcon from "../assets/logoBQ.png";
import { Link } from "react-router-dom";
import usePreparedOrdersCount from './preparedOrdersCount.jsx';
import Modal from '../views/modal/modal.jsx';
import PreparedOrdersList from '../views/chef/PreparedOrdersList.jsx';

//import "./header.scss";
//import '../build/css/index.css'; // para aplicar estilo sass

function Header(props) {

  const preparedOrdersCount = usePreparedOrdersCount();
  const [open, setOpen] = useState(false);

  return (
    <div className="header_nav">

      <section className="header_nameRol">
        <img className="littleLogo" src={logo} alt="logo" />
        <a href='/waiterOrder'>{props.rol}</a>

      </section>

      <div className="orders-alert" >
        <div className="pending-order"> {preparedOrdersCount} </div>
        <img className="waiter-alert" src={ordersIcon} alt="icon" width="55" height="55" onClick={() => { setOpen(true) }} />
        <Modal open={open} close={() => setOpen(false)}>
          <PreparedOrdersList />
        </Modal>
      </div>
      <div>
        <nav>
          <input className="menu-checkbox" type="checkbox" id="menu" />
          <label className="menu" htmlFor="menu">
            &#x2630;
          </label>
          <ul className="ul-menu">
            <Link to="/rol">
              <li className="li-menu">Rol</li>
            </Link>
            <Link to="/">
              <li className="li-menu">Exit</li>
            </Link>
          </ul>
        </nav>
      </div>
      <hr />
      <hr />
    </div>
  );
}
export default Header;
