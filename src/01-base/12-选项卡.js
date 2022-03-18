import React, { Component } from 'react'
import './css/02选项卡.css'
import Film from './12-conponents/Film'
// import Cinema from './12-conponents/Cinema'
import Cinema from './20-受控Cinema'
import Center from './12-conponents/Center'
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
  render() {
    return (
      <div>
        {this.which()}
        <ul className='footer'>
          {
            this.state.list.map(item => 
              <li key={item.id} className={this.state.activeId === item.id ? 'active' : ''} onClick={()=>{
                this.getClickId(item.id)
              }}>{item.text}</li>
            )
          }
        </ul>
      </div>
    )
  }
  getClickId(id){
    this.setState({
      activeId:id
    })
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
