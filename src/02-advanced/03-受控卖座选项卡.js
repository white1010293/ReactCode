import React, { Component } from 'react'
import './css/02选项卡.css'
import Film from './卖座选项卡受控/Film'
import Cinema from './卖座选项卡受控/Cinema'
import Center from './卖座选项卡受控/Center'
import Tabbar from './卖座选项卡受控/Tabbar'
import Navbar from './卖座选项卡受控/Navbar'
export default class App extends Component {
  state={
    list:[
      {
        id:1,
        text:"电影"
      },
      {
        id:2,
        text:"影院"
      },
      {
        id:3,
        text:"我的"
      },
      
    ],
    activeId:1
  }
  myTabbar = new React.createRef()
  render() {
    return (
      <div>
        <Navbar event={()=>{
          this.setState({
            activeId:3
          })
        }}></Navbar>
        
        {this.which()}
        <Tabbar list={this.state.list} activeId={this.state.activeId} event={(id)=>{
          this.setState({
            activeId:id
          })
        }}></Tabbar>
      </div>
    )
  }
  which(){
    switch(this.state.activeId){
      case 1: return <Film></Film>
      case 2: return <Cinema></Cinema>
      case 3: return <Center></Center>
      default: return null
    }
  }
  
}
