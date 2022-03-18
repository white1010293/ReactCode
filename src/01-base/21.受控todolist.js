import React from "react";
import './css/10-todolist.css'
class App extends React.Component{
  myIpt = React.createRef()
  state = {
    placeholder:"请输入新任务",
    iptVal:'', // 输入框默认值
    list:[
      {
        text:'第一个任务',
        id:0,
        del:false
      },
      {
        text:'第二个任务',
        id:1,
        del:true
      },
    ],
    nextId:2
  }
  render(){
    
    return (
      <div className="container">
        <h1>App</h1>
        <input type="text" value={this.state.iptVal} placeholder={this.state.placeholder} onInput={
          (e)=>{
            this.setState({
              iptVal:e.target.value
            })
          }
        }/>
        <button onClick={this.setList}>添加任务</button>
        <hr/>
        <ul>
          {this.state.list.length === 0 ? <li style={{color:"#999",textAlign:'center'}}>空空如也</li> : null}
          {this.state.list.map(item => <label style={{borderBottom:"1px solid #999",display:'block'}}>
          <li key={item.id}>
            {/* {item.text}  */}
            <input type="checkbox" checked={item.del} onChange={
              ()=>{
                this.setDel(item.id)
              }
            }/>
            <span dangerouslySetInnerHTML={{__html:item.text}} style={item.del?{textDecoration:'line-through',fontStyle:"italic"}:null}></span>
            </li></label>)}
        </ul>
      </div>
    )
  }
  // 加入新任务
  setList= () =>{
    if(!this.state.iptVal){
      return this.setState({
        placeholder: '输入任务不能为空！'
      })
    }
    // console.log(this.myIpt.current.value)
    // console.log(this.state.nextId + 1)
    let newList = this.state.list.map(item=>item)
    newList.push({
      text:this.state.iptVal,
      id:this.state.nextId
    })
    console.log(newList)
    console.log(this.state.list)
    
    this.setState({
      list:newList,
      nextId:this.state.nextId+1
    })
    this.state.iptVal = ''
  }
  // 设置任务选中状态
  setDel = (id)=>{
    let newList = this.state.list.map(items =>{
      if(items.id === id){
        return {
          text:items.text,
          id:items.id,
          del:!items.del
        }
      }else{
        return items
      }
    })
    console.log(newList)
    this.setState({
      list:newList
    })
  }
}
export default App