import { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";

const UseOrdersPending = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firestore.collection("order")
      .where("state", "==", "pending")
      .onSnapshot((snapshot) => {
        let newOrders = snapshot.docs.map((doc) => ({
          orderId: doc.id,
          data: doc.data(),
        }));
        setOrders(newOrders);
      });
  }, []);

  return orders;
};

export default UseOrdersPending;
