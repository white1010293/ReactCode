/* class Test {
  constructor(){
    this.a = 1
  }

  testa(){
    console.log('testa')
  }
  testb(){

  }
}

var obj = new Test()
obj.testa()
console.log(obj.a) */

import React from "react";

class App extends React.Component {
  render(){
    return (
    <div>
        hello react Component
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
      </div>
    )
  }
}
export default App
// var obj = new App()
// console.log()