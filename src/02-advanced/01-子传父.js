import React, { Component } from 'react'

class Navbar extends Component{
  render(){
    return (
      <div style={{background:'#999',border:'1px solid black'}}>
        <button onClick={()=>{
          console.log('click')
          this.props.event()
          // this.
        }}>click</button>
        <span>Navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component{
  render(){
    return (
      <div style={{width:'50%', border:'2px solid gray'}}>
        <ul>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </ul>
      </div>
    )
  }
}
export default class App extends Component {
  state = {
    isShow:true
  }
  render() {
    return (
      <div>
        <Navbar event={()=>{
          console.log('父组件上的')
          this.setState({
            isShow:!this.state.isShow
          })
        }}></Navbar>
        {/* <button onClick={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
        }}>取反-父</button> */}
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}
