import React, { Component } from 'react'
import Navbar from './props/Navbar'


export default class App extends Component {
  state = {
    list:['首页','推荐','我的']
  }
  render() {
    return (
      <div>
        <Navbar title="首页" leftShow={false}></Navbar>
        <Navbar title="推荐"></Navbar>
        <Navbar title="我的"></Navbar>
        15-属性props:{this.props.name}
      </div>
    )
  }
}
