import React from 'react';

const ChefButton = () => {
    return (
        <>
            <section className='chef__Button'>
                <button id='pending' className='chefButton__Status'>Pendientes</button>
                <button id='ready' className='chefButton__Status'>Listos</button>
            </section>

        </>
    );
}

export default ChefButton;