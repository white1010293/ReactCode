import React, { Component } from 'react'

export default class App extends Component {
  /* state = {
    text: "收藏"
  } */
  state = {
    list:['111','222','333']
  }
  render() {
    var newList = this.state.list.map((item,index) => <li key={index}>{item}</li>)
    return (
      <div>
        <h1>欢迎来到react开发</h1>

        <ul>
          {newList}
        </ul>
      </div>
    )
  }
}
