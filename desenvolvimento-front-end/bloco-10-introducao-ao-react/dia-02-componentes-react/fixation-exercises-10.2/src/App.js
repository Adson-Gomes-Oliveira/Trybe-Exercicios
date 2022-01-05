import React from 'react'
import './App.css'
import Order from './Order'
import TechInfo from './TechInfo.js'
import Menu from './Menu'

const products = [
  {
    id: 102447592,
    product: 'Razer Headphone Kraken 54G',
    price: {
      value: 69.0,
      currency: 'dollars'
    },
    year: 2016,
    desc: 'Fone Razer com som Stereo na mais alta qualidade 8.5 Ghz, microfone supressor de ruido, controle manual e digital.'
  },
  {
    id: 10244798,
    product: 'Teclado Logitec Prisma RGB LED',
    price: {
      value: 19.0,
      currency: 'dollars'
    },
    year: 2019,
    desc: 'Teclado com teclas leves e ótima resistência cores intesas em RGB para que possa utilizar mesmo em ambientes mais escuros.'
  },
  {
    id: 102447441,
    product: 'AMD Saphire 65GB 1458 Mhz',
    price: {
      value: 1069.0,
      currency: 'dollars'
    },
    year: 2016,
    desc: 'Placa de video de ultima geração, perfeita para os jogos mais pesados e trabalhos gráficos mais intensos, uma experiência Saphire AMD!'
  }
]

const headphone = {
  id: 102447592,
  product: 'Razer Headphone Kraken 54G',
  price: {
    value: 69.0,
    currency: 'dollars'
  },
  year: 2016,
  desc: 'Fone Razer com som Stereo na mais alta qualidade 8.5 Ghz, microfone supressor de ruido, controle manual e digital.'
}

const video = {
  id: 77458122547,
  product: 'Nvidia 12 GB 3500 7458RPM',
  price: {
    value: 925.99,
    currency: 'dollars'
  },
  year: 2021,
  desc: 'Placa de video Nvidia, a melhor escolha para seu jogos e tarefas do dia a dia'
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
          <h1> Best Offers </h1>
          <Menu />
        </header>

        <main>
          <section className="promo-section">
            <h2> Produtos em Destaque </h2>

            <div className="cards">
              {products.map(product => (
                <TechInfo techInfo={product} />
              ))}
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default App
