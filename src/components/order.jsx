import React, { useState } from "react";
import Button from "./primaryButton.jsx";
import OrderItem from "./OrderItem.jsx";
//import { Notify, NotifyErrorInput, NotifyErrorOrder } from "./notification.jsx";
//import { ToastContainer } from "react-toastify";
import Input from "./inputs.jsx";
import { firestore } from "../firebase/config";
import './order.scss'
function Order(props) {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [actualOrder, setActualOrder] = useState([]);

  // array de la orden que se trae desde la vista del mesero
  const resumen = props.order;
  console.log(actualOrder);
  console.log(resumen)

  const totalCustomer = resumen.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Funcionalidades

  const addItemQuantity = (item) => {
    item.quantity = item.quantity + 1;
    setActualOrder({ ...resumen });
  };
  const removeItemQuantity = (item) => {
    // eliminar el producto si la cant prod. es menor a 1
    if (item.quantity <= 1) {
      resumen.splice(resumen.indexOf(item), 1);
      setActualOrder([...resumen]);
    } else {
      item.quantity = item.quantity - 1;
      setActualOrder({ ...resumen });
    }
  };
  const deleteItem = (item) => {
    resumen.splice(resumen.indexOf(item), 1);
    setActualOrder([...resumen]);
  };

  const sendOrder = (e) => {
    e.preventDefault();
    if (!customerName || !tableNumber) {
      //NotifyErrorInput();
      alert('algo en order');
    } else if (resumen.length === 0) {
      //NotifyErrorOrder();
      alert("algo en order");
    } else {
      // Crear el objeto para subir a firebase
      firestore.collection("order")
        .add({
          customer: customerName,
          table: tableNumber,
          init_time: new Date().toLocaleString("es-PE"),
          order: resumen,
          state: "pending",
          total: "$" + totalCustomer,
        })
        .then(() => {
          setCustomerName("");
          setTableNumber("");
          setActualOrder(props.reset);
          //Notify();
        });
    }
  };

  return (
    <>
      <section className="orderContainer" data-testid="order-comp">
        <h2 className="titleOrder">Orden</h2>
        <section className="menu-inputs">
          <Input
            label="Cliente:"
            className="customer"
            placeh='Ingrese nombre del cliente'
            value={customerName}
            handleChange={(e) => setCustomerName(e.target.value)}
          />
          <Input
            label="Mesa:"
            className="table"
            placeh='Número'
            value={tableNumber}
            handleChange={(e) => setTableNumber(e.target.value)}
          />
        </section>
        <section className="orderTitleItem">
          <h4>Cant.</h4>
          <h4>Producto</h4>
          <h4>Precio</h4>
        </section>
        <section className="tab-order">
          {resumen.map((item, index) => {
            return (
              <OrderItem
                key={index}
                quantity={item.quantity}
                product={item.product}
                newPrice={item.quantity * item.price}
                addItem={(e) => addItemQuantity(item)}
                restItem={(e) => removeItemQuantity(item)}
                deleteItem={(e) => deleteItem(item)}
              />
            );
          })}
        </section>
        <section className="totalOrder">
          <h3>
            TOTAL: $
            <span>{totalCustomer}</span>
          </h3>
        </section>
        <section className="menu-order-btns">
          <Button onClick={props.onClick} class="cancel-btn" label="Cancelar" />
          <Button data-testid="send-order" class="send-btn" label="Enviar" onClick={sendOrder} />
          {/* <ToastContainer /> */}
        </section>
      </section>
    </>
  );
}
export default Order;
