import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  mytext2 = React.createRef()
  render() {
    return (
      <div>
        {/* <input ref="ipt"/> */}
        <input ref={this.mytext2}/>
        <button onClick={()=>{
          // console.log("click1",this.refs.ipt)
          console.log("click2",this.mytext2.current.value)
        }}>add</button>
      </div>
    )
  }
 
}