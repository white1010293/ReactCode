// console.log('Hello World')

// 从 react 的包当中引入了 React。只要你要写 React.js 组件就必须引入React, 因为react里有一种语法叫JSX，稍后会讲到JSX，要写JSX，就必须引入React
import React from 'react'

// ReactDOM 可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了。它是从 react-dom 中引入的，而不是从 react 引入。
import ReactDom from 'react-dom'

// import App from './01-base/01-class组件.js'
// import App from './01-base/02-函数式组件.js'
// import App from './01-base/03-组件的嵌套.js'
// import App from './01-base/04-组件的样式.js'
// import App from './01-base/05-事件绑定.js'
// import App from './01-base/06-事件绑定-2.js'
// import App from './01-base/07-ref.js'
// import App from './01-base/08-state.js'
// import App from './01-base/09-循环渲染.js'
// import App from './01-base/10-todolist.js'
// import App from './01-base/11-dangerouslySetInnerHTML.js'
// import App from './01-base/12-选项卡.js'
// import App from './01-base/13-setState同步异步.js'
// import App from './01-base/14-betterScroll.js'
// import App from './01-base/15-属性props.js'
// import App from './01-base/16-函数式组件的props.js'
// import App from './01-base/17-属性VS状态.js'
// import App from './01-base/18-非受控.js'
// import App from './01-base/19.受控.js'
// import App from './01-base/21.受控todolist'


// import App from './02-advanced/01-子传父.js'
// import App from './02-advanced/02-非受控卖座选项卡功能.js'
// import App from './02-advanced/03-受控卖座选项卡'
// import App from './02-advanced/04-父子通信版本表单域'
// import App from './02-advanced/05-ref版本父子表单域组件'
import App from './02-advanced/05-ref版本父子表单域组件'

// ReactDom.render(<div>111</div>,document.getElementById("root"))
/* ReactDom.render(React.createElement("div",{
  id:"aaa",
  className:"bbb"
},"11111"),document.getElementById("root")) */
ReactDom.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  ,document.getElementById("root"))

/* 
  jsx == js + xml
*/