import React from 'react';
import WaiterHeader from '../components/WaiterHeader';
import WaiterMenu from '../components/WaiterMenu.jsx'
import WaiterMenu1 from '../components/WaiterMenu1.jsx'
import WaiterSummary from '../components/WaiterSummary.jsx';
// import { useAuth } from '../context/AuthContext.jsx';
// import Error404 from './Error404.jsx';

const Waiter = () => {
    // const { user } = useAuth();
    // console.log(user)

    return (
        <>
            < WaiterHeader />
            <section className='waiter'>
                <section className="menuMain">
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
