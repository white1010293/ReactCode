import React from "react";
import './css/active.css'
const a = 20
class App extends React.Component{
  render(){
    let b = 'www';
    var obj = {
      color:'blue'
    }
    return (
      <div>
        {a}{b}
        <div style={{color:'red'}}>1111</div>
        <div style={obj}>1111</div>

        <div className="active">3333</div>
        <label htmlFor="inputText">输入框</label>
        <input type="text" id="inputText"/>
      </div>
    )
  }
}
export default App