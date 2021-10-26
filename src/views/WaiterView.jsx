import React, { useState } from "react";
import Data from "../data/data.json";
import WaiterHeader from "../comp/WaiterHeader.jsx";
import NavigationMenu from "../comp/NavigationMenu.jsx";
import Item from "../comp/Item.jsx";
import Order from "../comp/Order.jsx";
// import Modal from "../modal/modal";
// import ModalContent from "../modal/modalContent.jsx";
// import { DeviceMesssagePhone } from "../../comp/deviceMessage";
// import { NotifyErrorCanceled } from "../../comp/notification.jsx";
// import { ToastContainer } from "react-toastify";

function WaiterView() {
    // Data
    const data = Data.Data;

    //Estados
    const [menuName, setMenuName] = useState("Desayuno");
    const [order, setOrder] = useState([]);
    //const [open, setOpen] = useState(false);
    //const [itemLunch, setItemLunch] = useState("");

    // // Unique id generator
    // const letters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
    // let idSuffixLunch = "";
    // for (let i = 0; i < 4; i++) {
    //     idSuffixLunch += letters.charAt(Math.floor(Math.random() * letters.length));
    // }

    // const addExtrasOrder = (e) => {
    //     let price = itemLunch.price;
    //     let product = itemLunch.product;
    //     let key = itemLunch.id + "-" + idSuffixLunch;
    //     let quantity = 1;
    //     let meatDefault = " meat";

    //     if (e.target.dataset.meat !== "") {
    //         product += ", " + e.target.dataset.meat;
    //     }
    //     if (!e.target.dataset.meat) {
    //         product += ", " + meatDefault;
    //     }
    //     if (e.target.dataset.egg === "egg") {
    //         product += ", egg";
    //         price++;
    //     }
    //     if (e.target.dataset.cheese === "cheese") {
    //         product += ", cheese";
    //         price++;
    //     }
    //     console.log(product);
    //     order.push({ key, product, price, quantity });
    //     setOpen(false);
    // };

    const addItemOrder = (item) => {
        //devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada.
        //En caso contrario devuelve -1.
        const singleItem = order.findIndex((i) => i.key === item.id);

        // if (item.type === "De la casa" && item.subtype !== "Acompañamiento") {
        //     // setOpen(true);
        //     // console.log("aparece modal hamburguesa");
        //     //setItemLunch(item);
        // }
        //else
        if (singleItem === -1) {
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
        <div className="waiter-container">
            <div className="waiter-box">
                {/* <div className="header-waiter"> */}
                {/* <Header rol="Waiter" /> */}
                <WaiterHeader />
                {/* </div> */}
                <div className="waiter">
                    <div className="menuMain">
                        <NavigationMenu
                            onBreakfast={() => setMenuName("Desayuno")}
                            onLunch={() => setMenuName("De la casa")}
                            onDrinks={() => setMenuName("Bebidas")}
                        />
                        <div className="data-button-product">
                            {data.filter((sort) => sort.type.includes(menuName))
                                .map((item, index) => (
                                    <Item
                                        onAddProduct={() => {
                                            addItemOrder(item);
                                            // 'se agrega funcion para add item a la otra colum';
                                        }}
                                        key={index}
                                        // img={item.img}
                                        product={item.product}
                                        price={item.price}
                                    />
                                ))
                            }
                        </div>
                        {/* <Modal open={open} close={() => setOpen(false)}>
                            <ModalContent onClick={(e) => addExtrasOrder(e)} />
                        </Modal>
                        <ToastContainer /> */}
                    </div>
                    <div className="menuSummary">
                        <Order
                            data-testid="order"
                            order={order}
                            reset={clearOrder}
                            onClickCancel={() => {
                                setOrder([]);
                                //NotifyErrorCanceled();
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* <DeviceMesssagePhone /> */}
        </div>
    );
}

export default WaiterView;