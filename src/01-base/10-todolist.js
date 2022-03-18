import React from "react";
import './css/10-todolist.css'
class App extends React.Component{
  myIpt = React.createRef()
  state = {
    placeholder:"请输入新任务",
    list:[
      {
        text:'第一个任务',
        id:0
      },
      {
        text:'第二个任务',
        id:1
      },
    ],
    nextId:2
  }
  render(){
    
    return (
      <div className="container">
        <h1>App</h1>
        <input type="text" ref={this.myIpt} placeholder={this.state.placeholder}/>
        <button onClick={this.setList}>添加任务</button>
        <hr/>
        <ul>
          {this.state.list.length === 0 ? <li style={{color:"#999",textAlign:'center'}}>空空如也</li> : null}
          {this.state.list.map(item => <li key={item.id}>
            {/* {item.text}  */}
            <span dangerouslySetInnerHTML={{__html:item.text}}></span>
            <button className="cls" onClick={()=>{
            this.clsListItem(item.id)
          }}>删除</button></li>)}
        </ul>
      </div>
    )
  }
  setList= () =>{
    if(!this.myIpt.current.value){
      return this.setState({
        placeholder: '输入任务不能为空！'
      })
    }
    // console.log(this.myIpt.current.value)
    // console.log(this.state.nextId + 1)
    let newList = this.state.list.map(item=>item)
    newList.push({
      text:this.myIpt.current.value,
      id:this.state.nextId++
    })
    console.log(newList)
    console.log(this.state.list)
    
    this.setState({
      list:newList,
    })
    this.myIpt.current.value = ''
    this.myIpt.current.focus()
    
  }
  // 删除数据
  clsListItem = (id)=>{
    var newList = this.state.list.filter(item => item.id != id)
    this.setState({
      list:newList
    })
  }
}
export default App