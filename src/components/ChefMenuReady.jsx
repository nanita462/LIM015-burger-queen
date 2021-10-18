import React from 'react';
import ChefHeader from './ChefHeader.jsx'
import ChefMenuLeft from './ChefMenuLeft.jsx';
import ChefButton from './ChefButton.jsx';
import ChefMenuRight2 from './ChefMenuRight2.jsx';

const ChefMenuReady = () => {
   
    return ( 
    
    <>
        <ChefHeader />
        <section className='chef'>
           <section className= "menuMainChef">
             <ChefButton />
             <ChefMenuLeft />
           </section>
           <section className="menuSummaryChef">
             <ChefMenuRight2 />
           </section>
        </section> 

        </>
    
     );
}
 
export default ChefMenuReady;