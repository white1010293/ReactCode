import React from "react";

class Navbar extends React.Component{
  render(){
    return (
      <div>Navbar</div>
    )
  }
}

const Tabbar = () => <div>Tabbar</div>

function Swiper(){
  return (
    <div>
      Swiper
      <Tabbar></Tabbar>
    </div>
  )
}


class App extends React.Component{
  render(){
    return (
      <div>
        <p>组件嵌套</p>
        <Navbar></Navbar>

        <Swiper></Swiper>
        
      </div>
    )
  }
}

export default App
