import React, { Component } from 'react'
import props from 'prop-types'
console.log(props)
export default class Navbar extends Component {
  static propTypes = {
    title:props.string,
    leftShow:props.bool
  }
  static defaultProps = {
    leftShow:true
  }
  render() {
    console.log(this.props)
    return (
      <div>
        
        <div style={{border:'1px solid black'}}>
        Navbar组件--{this.props.title}
        <button style={{display:this.props.leftShow?'block':'none'} }>返回</button>
        </div>
      </div>
    )
  }

}
// 类属性
Navbar.propTypes = {
  title:props.string,
  leftShow:props.bool
}
