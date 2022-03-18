import React, { Component } from 'react'

export default class Tabbar extends Component {
  state = {
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
        <ul className='footer'>
          {
            this.state.list.map(item => 
              <li 
              key={item.id} 
              className={this.state.activeId === item.id ? 'active' : ''} 
              onClick={()=>{
                this.getClickId(item.id)
              }}> {item.text} </li>
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
    // 通知父组件 修改父组件状态
    this.props.event(id)
  }

  
  
}
