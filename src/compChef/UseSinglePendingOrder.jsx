import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const UseSinglePendingOrder = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        firestore.collection("order")
            .doc(order)
            .where("state", "==", "pending")
            .onSnapshot((snapshot) => {
                let singleOrder = snapshot.docs.map((doc) => ({
                    orderId: doc.id,
                    data: doc.data(),
                }));
                setOrder(singleOrder);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return order;
};

export default UseSinglePendingOrder;