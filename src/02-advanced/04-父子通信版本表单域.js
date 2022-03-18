import React, { Component } from 'react'
import Filed from './表单域/Filed'
window.onload = function(){
  console.log('load')
  // localStorage.setItem('username','abcdefg')
  
}
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userName:localStorage.getItem('username'),
      password:'',
      age:''
    }
  }
  
  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <Filed lable="用户名" type="text" value={this.state.userName} 
        event={(val)=>{
          console.log(val)
          this.setState({
            userName:val
          })
        }}/>
        <Filed lable="密码" type="password" value={this.state.password}
        event={(val)=>{
          console.log(val)
          this.setState({
            password:val
          })
        }}/>
        <Filed lable="年龄" type="text" value={this.state.age}
        event={(val)=>{
          console.log(val)
          this.setState({
            age:val
          })
        }}/>
        <button onClick={()=>{
          console.log(this.state.userName,this.state.password,this.state.age)
        }}>登录</button>
        <button onClick={
          ()=>{
            this.setState({
              userName:'',
              password:'',
              age:''
            })
          }
        }>重置</button>
      </div>
    )
  }
}
