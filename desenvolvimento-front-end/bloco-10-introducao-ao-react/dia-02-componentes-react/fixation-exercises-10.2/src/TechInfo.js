import React, { Component } from 'react'
import './TechInfo.css'

class TechInfo extends Component {
  render() {
    const { year, desc, product, price, id } = this.props.techInfo

    return (
      <div className="product-card">
        <h3>{product}</h3>
        <p className="min-gray id-product">{id}</p>
        <p className="description">{desc}</p>
        <div className="year-price">
          <p className="min-gray year-product">Ano de lançamento: {year}</p>
          <p className="price">
            {price.value} {price.currency}
          </p>
        </div>
      </div>
    )
  }
}

export default TechInfo
