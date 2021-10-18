import React from 'react';
import WaiterHeader from './WaiterHeader.jsx';


const OrderReady = () => {
    return (  
        <>
        <WaiterHeader/>
        <section className='OrderChef'>
        <section className='orderTitle'>
        <h2>Pedidos Listos</h2>
        </section>
        <section className="container__ChefMenu">
            <section className= 'btnDelivery'>
            <p>Cliente</p><button>Entregar</button><br></br>
            </section>
            <section className= 'btnDelivery'>
            <p>Cliente</p><button>Entregar</button><br></br>
            </section>
            <section className= 'btnDelivery'>
            <p>Cliente</p><button>Entregar</button><br></br>
            </section>
            <section className= 'btnDelivery'>
            <p>Cliente</p><button>Entregar</button><br></br>
            </section>
            <section className= 'btnDelivery'>
            <p>Cliente</p><button>Entregar</button><br></br>
            </section>
           
            </section>
            </section>
        



        </>


    );
}
 
export default OrderReady;