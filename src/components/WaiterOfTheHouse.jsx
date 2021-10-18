import React from 'react';
import WaiterHeader from './WaiterHeader';
import WaiterMenu from './WaiterMenu'
import WaiterMenu2 from './WaiterMenu2'
import WaiterSummary from './WaiterSummary';

const WaiterOfTheHouse = () => {
    return ( 
        <>
        
        < WaiterHeader />
        <section className='waiter'>
        <section className= "menuMain">
        < WaiterMenu />
        < WaiterMenu2 />
        </section> 
        
        <section className="menuSummary">
        < WaiterSummary />
        </section>
       
        </section>

        </>




     );
}
 
export default WaiterOfTheHouse;