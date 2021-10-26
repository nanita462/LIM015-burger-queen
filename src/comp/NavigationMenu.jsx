import React from 'react';

function NavigationMenu(props) {
    return (
        <section className="menuNames">

            <button className="menuName" onClick={props.onBreakfast}>
                Desayuno
            </button>
            <button className="menuName" onClick={props.onLunch}>
                De la casa
            </button>
            <button className="menuName" onClick={props.onDrinks}>
                Bebidas
            </button>

        </section>
    )
}

export default NavigationMenu;