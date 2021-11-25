import React, { Component } from 'react'

class List extends Component {
  render() {
    const Task = value => {
      return <li>{value}</li>
    }

    const comp = [
      'Samsung M32',
      'Samsung M62',
      'Samsung S21 Plus',
      'Asus Zenfone Max Pro (M2)'
    ]

    return (
      <>
        <ul>
          {comp.map(cell => {
            return <li key={cell}>{cell}</li>
          })}
        </ul>
      </>
    )
  }
}

export default List
