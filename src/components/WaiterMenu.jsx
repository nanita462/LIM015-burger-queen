import React from 'react';
import { firestore } from '../firebase/config';


//import { Link } from 'react-router-dom';

const WaiterMenu = () => {
    const [menu, setMenu]= React.useState([])
    const [types, setTypes]= React.useState('Desayuno') 
    

    React.useEffect(()=>{
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
                     <button key= {item.id}>{item.product} <p>$ {item.price}</p></button>
                  
                  ))
                }
              </section>



        </>
        

       


    );
}

export default WaiterMenu;
