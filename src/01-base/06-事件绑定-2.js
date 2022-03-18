import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  render() {
    return (
      <div>
        <input ref="ipt"/>
        <button onClick={(evt)=>{
          console.log("click",this.a,evt)
        }}>add</button>
        <button onClick={this.showIpt3.bind(this)}>add2</button>
        <button onClick={()=>{
          console.log(this)
          this.showIpt3('showIpt4')
        }}>add3</button>
      </div>
    )
  }
  showIpt2 = (evt)=>{
    console.log("click2",this.a,evt)
  }
  showIpt3(id){
    console.log("click3",this.a,id)
  }
}