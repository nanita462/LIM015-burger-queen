import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

const usePreparedOrdersCount = () => {
  const [preparedOrdersCount, setPreparedOrdersCount] = useState([]);

  useEffect(() => {
    firestore.collection("order")
      .where("state", "==", "prepared")
      .onSnapshot((snapshot) => {
        let preparedOrdersArray = snapshot.docs.map((doc) => ({
          orderId: doc.id,
          data: doc.data(),
        }));

        setPreparedOrdersCount(preparedOrdersArray.length);
      });
  }, []);

  return preparedOrdersCount;
};

export default usePreparedOrdersCount;
