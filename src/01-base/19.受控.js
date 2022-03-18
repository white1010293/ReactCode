import React, { Component } from 'react'

export default class App extends Component {
  state ={
    iptVal:''
  }
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text" value={this.state.iptVal} onInput={(e)=>{
          console.log(e.target.value)
          this.setState({
            iptVal:e.target.value
          })
        }}/>
        <button onClick={()=>{
          console.log(this.state.iptVal)
        }}>登录</button>
        <button onClick={()=>{
          this.setState({
            iptVal:''
          })
        }}>重置</button>
      </div>
    )
  }
}
