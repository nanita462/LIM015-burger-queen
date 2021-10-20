import React from 'react';
import ChefHeader from '../components/ChefHeader.jsx'
import ChefMenuLeft from '../components/ChefMenuLeft.jsx';
import ChefButton from '../components/ChefButton.jsx';
import ChefMenuRight2 from '../components/ChefMenuRight2.jsx';

const ChefMenuReady = () => {

  return (

    <>
      <ChefHeader />
      <section className='chef'>
        <section className="menuMainChef">
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