import React, { Component } from 'react'


class Child extends Component {
  render() {
    return (
      <div>
        Child组件-{this.props.text}
        <button onClick={()=>{
          this.props.text = "3333"
        }}>点击我-子</button>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    text : "111111"
  }
  render() {
    return (
      <div style={{border:'1px solid black'}}>
        <Child text={this.state.text}></Child>
        <button onClick={()=>{
          this.setState({
            text:"222222"
          })
        }}>点击我-父</button>
      </div>
    )
  }
}
