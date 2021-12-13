import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <nav id="nav-bar">
        <ul className="menu">
          <li>Início</li>
          <li>Sobre</li>
          <li>Mais Procurados</li>
          <li>Melhores Ofertas</li>
          <li>Contato</li>
        </ul>
      </nav>
    )
  }
}

export default Menu
