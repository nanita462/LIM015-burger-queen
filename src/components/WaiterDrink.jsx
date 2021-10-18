import React from 'react';
import WaiterHeader from './WaiterHeader.jsx';
import WaiterMenu from './WaiterMenu.jsx'
import WaiterMenu3 from './WaiterMenu3.jsx'
import WaiterSummary from './WaiterSummary.jsx';

const Waiter = () => {
    return ( 
        <>
        
        < WaiterHeader />
        <section className='waiter'>
        <section className= "menuMain">
        < WaiterMenu />
        < WaiterMenu3 />
        </section> 
        
        <section className="menuSummary">
        < WaiterSummary />
        </section>
       
        </section>

        </>




     );
}
 
export default Waiter;