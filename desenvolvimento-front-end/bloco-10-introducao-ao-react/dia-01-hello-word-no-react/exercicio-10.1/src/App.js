import logo from './logo.svg'
import './App.css'
import { Component } from 'react'
import List from './List'
import Header from './Header'
import Infos from './Infos'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <List />
        <Infos />
      </>
    )
  }
}

export default App
