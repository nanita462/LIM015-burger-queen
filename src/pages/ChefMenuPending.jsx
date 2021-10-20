import React from 'react';
import ChefButton from '../components/ChefButton.jsx';
import ChefHeader from '../components/ChefHeader.jsx';
import ChefMenuLeft from '../components/ChefMenuLeft.jsx';
import ChefMenuRight from '../components/ChefMenuRight.jsx';
//import { useAuth } from '../context/AuthContextjsx';

const ChefMenuPending = () => {
  // const { user } = useAuth();
  // console.log(user);

  return (
    <>
      <ChefHeader />
      <section className='chef'>
        <section className="menuMainChef">
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