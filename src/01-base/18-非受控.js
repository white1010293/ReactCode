import React, { Component } from 'react'

export default class App extends Component {
  myUsername = new React.createRef()
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input type="text" ref={this.myUsername} value="ddd" onInput={()=>{
          console.log(this.myUsername.current.value)
        }}/>
        <button onClick={()=>{
          console.log(this.myUsername.current.value)
        }}>登录</button>
        <button onClick={()=>{
          this.myUsername.current.value = ""
        }}>重置</button>
      </div>
    )
  }
}
