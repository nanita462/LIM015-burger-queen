import React, { useState } from "react";
import Header from "../../components/header.jsx";
import Item from "../../components/item.jsx";
import Order from "../../components/order.jsx";
import NavigationMenu from "../../components/navigationMenu.jsx";
import Data from "../../data/data.json";
import Modal from "../modal/modal.jsx";
import ModalContent from "../modal/modalContent.jsx";
//import { DeviceMesssagePhone } from "../../components/deviceMessage";

//import { NotifyErrorCanceled } from "../../components/notification.jsx";
//import { ToastContainer } from "react-toastify";
import '../../build/css/index.css'; // para aplicar estilo sass

function WaiterView() {
  const [menu, setMenu] = useState("Desayuno");
  const [order, setOrder] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemLunch, setItemLunch] = useState("");

  // Data from json file
  const data = Data.Data;

  // Unique id generator
  const letters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
  let idSuffixLunch = "";
  for (let i = 0; i < 4; i++) {
    idSuffixLunch += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  const addExtrasOrder = (e) => {
    let price = itemLunch.price;
    let product = itemLunch.product;
    let key = itemLunch.id + "-" + idSuffixLunch;
    let quantity = 1;
    let meatDefault = " meat";

    if (e.target.dataset.meat !== "") {
      product += ", " + e.target.dataset.meat;
    }
    if (!e.target.dataset.meat) {
      product += ", " + meatDefault;
    }
    if (e.target.dataset.egg === "egg") {
      product += ", egg";
      price++;
    }
    if (e.target.dataset.cheese === "cheese") {
      product += ", cheese";
      price++;
    }
    console.log(product);
    order.push({ key, product, price, quantity });
    setOpen(false);
  };

  const addItemOrder = (item) => {
    // //devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
    const singleItem = order.findIndex((i) => i.key === item.id);

    if (item.type === "De la casa" && item.subtype !== "Acompañamiento") {
      setOpen(true);
      console.log("entro a modal hamburguesa");
      setItemLunch(item);
    }
    else if (singleItem === -1) {
      const price = item.price;
      const product = item.product;
      const key = item.id;
      const quantity = 1;
      const readyChef = false;
      order.push({ key, product, price, quantity, readyChef });
      setOrder([...order]);
    } else {
      /* eslint-disable no-unused-vars */
      let doubleItem = order[singleItem];
      doubleItem = doubleItem.quantity += 1;
      setOrder([...order]);

    }
  };

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <>
      <section className="waiter-box">
        
          <Header rol="Waiter" />
       
        <section className="waiterContainer">
          <section className="menu-option">
            <NavigationMenu
              onBreakfast={() => setMenu("Desayuno")}
              onLunch={() => setMenu("De la casa")}
              onDrinks={() => setMenu("Bebidas")}
            />
            <section className="data-button-product">
              {data
                .filter((sort) => sort.type.includes(menu))
                .map((item, index) => (
                  <Item
                    onClick={() => {
                      addItemOrder(item);
                    }}
                    key={index}
                    product={item.product}
                    price={item.price}
                  />
                ))}
              
            </section>
            <Modal open={open} close={() => setOpen(false)}>
              <ModalContent onClick={(e) => addExtrasOrder(e)} />
            </Modal>
            {/* <ToastContainer /> */}
          </section>
          <section className="menu-order">
            <Order
              data-testid="order"
              order={order}
              reset={clearOrder}
              onClick={() => {
                setOrder([]);
                //NotifyErrorCanceled();
              }}
            />
          </section>
        </section>
      </section>
      {/* <DeviceMesssagePhone /> */}
    </>
  );
}

export default WaiterView;
