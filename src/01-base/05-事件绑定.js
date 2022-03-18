import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input ref="ipt"/>
        <button onClick={()=>{
          console.log(this)
        }}>add</button>
        <button onClick={()=>{
          this.showIpt4('showIpt4')
        }}>add</button>
        <button onClick={showIpt}>add2</button>
        <button onClick={this.showIpt2}>add3</button>
      </div>
    )
  }
  showIpt2 = ()=>{
    console.log(333)
    console.log(this.refs.ipt.value)
  }
  showIpt3(){
    console.log(333)
    console.log(this.refs.ipt.value)
  }
  showIpt4(id){
    console.log(444)
    console.log(id)
  }
}
let showIpt = () => {
  console.log(new App())
}