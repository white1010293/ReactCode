import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count:1
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleCount1}>add1</button>
        <button onClick={this.handleCount2}>add2</button>
      </div>
    )
  }
  handleCount1 = ()=>{
    this.setState({
      count: this.state.count+1
    },()=>{
      console.log(this.state.count)
    })
    

    this.setState({
      count: this.state.count+1
    },()=>{
      console.log(this.state.count)
    })
    

    this.setState({
      count: this.state.count+1
    },()=>{
      console.log(this.state.count)
    })
    
  }

  handleCount2 = ()=>{
    setTimeout(() => {
      this.setState({
        count: this.state.count+1
      })
      console.log(this.state.count)
  
      this.setState({
        count: this.state.count+1
      })
      console.log(this.state.count)
  
      this.setState({
        count: this.state.count+1
      })
      console.log(this.state.count)
    }, 0);
  }
}
