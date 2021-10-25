import React, {useEffect} from 'react';
import { firestore } from '../firebase/config';


//import { Link } from 'react-router-dom';

const WaiterMenu = (props) => {
    const [menu, setMenu]= React.useState([])
    const [types, setTypes]= React.useState('Desayuno') 
    console.log(props, props.onclickProduct)


   
    // const addProduct= (product) => {
      
    // //     let itemAdd = {};
    // //    // itemAdd.product = e.target.value ;
    // //     itemAdd.products = product;
        
    
    //     firestore.collection("orders")
    //       .doc(product.id).update({
    //         products: [product]
    //       })
    //       .then((p) => {
    //         console.log(p)
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
    useEffect(()=>{
        const getData= async ()=>{
            try{
                const menuData= await firestore.collection('menu').get();
                console.log(menuData.docs)
                const arrayData= menuData.docs.map(doc =>({id: doc.id, ...doc.data()}))
                console.log(arrayData)
                setMenu(arrayData.filter(doc => doc.type === types))
  
            }
            catch(error){
                console.log(error)
  
            }
        }
        getData()
    },[types])
    
    return (
        <>
   
        <section className="menuNames">
            <button className="menuName" onClick={() => { setTypes('Desayuno'); }}>Desayuno</button>
            <button  className="menuName" onClick={() => { setTypes('De la casa'); }}>De la casa</button>
            <button className="menuName" onClick={() => { setTypes('Bebidas'); }}>Bebidas</button>
        </section>
        <section className="cards">
                {
                  menu.filter(product => product.type === types).map((item) => (
                     <button onClick={() => {props.onclickProduct(item.product, item.price)}} value= {item.product} valueprice= {item.price} key= {item.id}>{item.product} <p>$ {item.price}</p></button>
                  
                  ))
                }
              </section>



        </>
        

       


    );
}

export default WaiterMenu;
