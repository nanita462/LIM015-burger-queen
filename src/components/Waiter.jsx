import React from 'react';
import WaiterHeader from './WaiterHeader';
import WaiterMenu from './WaiterMenu'
import WaiterMenu1 from './WaiterMenu1'
import WaiterSummary from './WaiterSummary';

const Waiter = () => {
    return ( 
        <>
        
        < WaiterHeader />
        <section className='waiter'>
        <section className= "menuMain">
        < WaiterMenu />
        < WaiterMenu1 />
        </section> 
        
        <section className="menuSummary">
        < WaiterSummary />
        </section>
       
        </section>

        </>




     );
}
 
export default Waiter;
