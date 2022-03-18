import React, { Component } from 'react'

export default class App extends Component {
  /* state = {
    text: "收藏"
  } */
  constructor(){
    super() // 将父类中的constructor继承
    this.state = {
      text: "收藏",
      isChecked:true
    }
  }
  render() {
    // var text = "收藏"
    return (
      <div>
        <h1>欢迎来到react开发</h1>

        <button onClick={()=>{this.setState({
          text: this.state.text == "收藏" ? "取消收藏" : "收藏",
          isChecked : !this.state.isChecked
          
        })} }>{this.state.text}</button>
        <input type="checkbox" checked={this.state.isChecked} onChange={()=>{
          this.setState((state,props)=>{
            console.log(state)
            console.log(props)
            return {
              text: this.state.text == "收藏" ? "取消收藏" : "收藏",
              isChecked : !this.state.isChecked
            }
          })
        }}/>
      </div>
    )
  }
}
