import React, { Component } from 'react'

class Infos extends Component {
  render() {
    const info = [
      {
        modelo: 'Samsung M32',
        armazenamento: '128GB',
        memóriaRam: '6GB',
        preço: '1399'
      },
      {
        modelo: 'Samsung M62',
        armazenamento: '128GB',
        memóriaRam: '8GB',
        preço: '1699'
      },
      {
        modelo: 'Samsung S21 Plus',
        armazenamento: '256GB',
        memóriaRam: '8GB',
        preço: '2599'
      },
      {
        modelo: 'Asus Zenfone Pro Max(M2)',
        armazenamento: '64GB',
        memóriaRam: '6GB',
        preço: '1199'
      }
    ]

    return (
      <section className="info-cards">
        {info.map(cellInfo => {
          return (
            <div className="card">
              <h3 className="info-titles" key={cellInfo.modelo}>
                {cellInfo.modelo}
              </h3>
              <p key={cellInfo.modelo}>
                Este Smartphone possui {cellInfo.armazenamento} de
                armazenamento, conta com {cellInfo.memóriaRam} de RAM e custa
                apenas R$ {cellInfo.preço},00
              </p>
            </div>
          )
        })}
      </section>
    )
  }
}

export default Infos
