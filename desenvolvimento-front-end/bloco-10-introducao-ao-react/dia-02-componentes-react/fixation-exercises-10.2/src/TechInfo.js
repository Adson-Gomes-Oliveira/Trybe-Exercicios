import React, { Component } from 'react'

class TechInfo extends Component {
  render() {
    const { year, desc } = this.props.techInfo
    const { user, product, price } = this.props.order

    return (
      <section>
        <h3>Informações técnicas dos produtos</h3>
        <p>
          O ano de lançamento do produto {product} foi {year}, com o preço de
          {price}
        </p>
        <p>{desc}</p>
      </section>
    )
  }
}

export default TechInfo
