import React from 'react';
import './navigationMenu.scss';


function NavigationMenu(props) {
  return (
    
    <section className="menu-navigation">
      
        <button className="title-btn" onClick={props.onBreakfast}>
          Desayuno
        </button>
        <button className="title-btn" onClick={props.onLunch}>
          De la casa
        </button>
        <button className="title-btn" onClick={props.onDrinks}>
          Bebidas
        </button>
      
    </section>
  )
}

export default NavigationMenu;