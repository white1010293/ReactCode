import React, { Component } from 'react'

export default class Filed extends Component {
  state = {
    value:""
  }
  clear(){
    this.setState({
      value:''
    })
  }
  render(){
    return (
      <label>
        <span style={{width:'60px',display:'inline-block',textAlign:"right",paddingRight:'5px'}}>{this.props.lable || '测试'}</span>
        <input type={this.props.type} value={this.state.value}
        onChange={(e)=>{
          this.setState({
            value:e.target.value
          })
        }}/>
        <br/>
      </label>
    )
  }
}
