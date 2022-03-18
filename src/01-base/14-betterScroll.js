import React, { Component } from 'react'
import BScroll from 'better-scroll'
export default class App extends Component {
  constructor(){
    super()
    this.state ={
      list:[]
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.getData}>click</button>
        <div className='wrapper' style={{height:'200px',background:'#999',overflow:'hidden',}}>
          <ul className='content'>
            {
              this.state.list.map((item,index) => 
                <li key={index}>{item}</li>  
              )
            }
          </ul>
        </div>
      </div>
    )
  }
  getData = ()=>{
    
    let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    this.setState({
      list
    },()=>{
      new BScroll('.wrapper')
    })
    
    
  }
}
