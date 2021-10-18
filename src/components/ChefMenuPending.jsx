import React from 'react';
import ChefButton from './ChefButton.jsx';
import ChefHeader from './ChefHeader.jsx';
import ChefMenuLeft from './ChefMenuLeft.jsx';
import ChefMenuRight from './ChefMenuRight.jsx';

const ChefMenuPending = () => {
    return (
        <>
        <ChefHeader />
        <section className='chef'>
           <section className= "menuMainChef">
             <ChefButton />
             <ChefMenuLeft />
           </section>
           <section className="menuSummaryChef">
             <ChefMenuRight />
           </section>
        </section> 

        </>

      );
}
 
export default ChefMenuPending;