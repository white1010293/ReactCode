import React, { Component } from 'react'
import Navbar from './props/Navbar'
import Sidebar from './props/Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <Navbar title="函数式组件" ></Navbar>

        {/* 函数式组件 */}
        <Sidebar bg="yellow" ></Sidebar>
      </div>
    )
  }
}
