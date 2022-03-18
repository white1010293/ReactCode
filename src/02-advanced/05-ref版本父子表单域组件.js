import React, { Component, createRef } from 'react'
import Filed from './表单域/FiledRef'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userName:localStorage.getItem('username'),
      password:'',
      age:''
    }
    
  }
  userName = new React.createRef()
  password = new React.createRef()
  age = new React.createRef()
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Filed lable="用户名" type="text" ref={this.userName}/>
        <Filed lable="密码" type="password" ref={this.password}/>
        <Filed lable="年龄" type="text" ref={this.age}/>
        <button onClick={()=>{
          console.log(this.userName.current)
          console.log(this.userName.current.state.value)
          console.log(this.password.current.state.value)
          console.log(this.age.current.state.value)
          // console.log(this.state.userName,this.state.password,this.state.age)
        }}>登录</button>
        <button onClick={
          ()=>{
            console.log('clear')
            this.userName.current.clear()
            this.password.current.clear()
            this.age.current.clear()
          }
        }>重置</button>
      </div>
    )
  }
}
