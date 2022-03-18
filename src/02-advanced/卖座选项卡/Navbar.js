import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <button>back</button>
        <span>卖座电影</span>
        <button onClick={()=>{
          this.props.event()
        }}>center</button>
      </div>
    )
  }
}
