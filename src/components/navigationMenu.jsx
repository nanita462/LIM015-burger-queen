import React from 'react';

function NavigationMenu(props) {
  return (
    <nav className="menu-nav">
      <ol>
        <li className="title-nav" onClick={props.onBreakfast}>
          Desayuno
        </li>
        <li className="title-nav" onClick={props.onLunch}>
          De la casa
        </li>
        <li className="title-nav" onClick={props.onDrinks}>
          Bebidas
        </li>
      </ol>
    </nav>
  )
}

export default NavigationMenu;