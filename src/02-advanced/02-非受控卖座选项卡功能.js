import React, { Component } from 'react'
import './css/02选项卡.css'
import Film from './卖座选项卡/Film'
import Cinema from './卖座选项卡/Cinema'
import Center from './卖座选项卡/Center'
import Tabbar from './卖座选项卡/Tabbar'
import Navbar from './卖座选项卡/Navbar'
export default class App extends Component {
  state={
    activeComponent:1
  }
  myTabbar = new React.createRef()
  render() {
    return (
      <div>
        <Navbar event={()=>{
          this.setState({
            activeComponent:3
          })

          this.myTabbar.current.setState({
            activeId:3
          })
          console.log(this.myTabbar.current.state.activeId)
          console.log(this.myTabbar)
        }}></Navbar>
        
        {this.which()}
        <Tabbar event={(id)=>{
          this.setState({
            activeComponent:id
          })
        }}
        ref={this.myTabbar}></Tabbar>
      </div>
    )
  }
  which(){
    switch(this.state.activeComponent){
      case 1: return <Film></Film>
      case 2: return <Cinema></Cinema>
      case 3: return <Center></Center>
      default: return null
    }
  }
  
}
