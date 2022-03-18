import React from 'react'

// export default class Tabbar extends Component {

//   render() {
//     return (
//       <div>
//         <ul className='footer'>
//           {
//             this.props.list.map(item => 
//               <li 
//               key={item.id} 
//               className={this.props.activeId === item.id ? 'active' : ''} 
//               onClick={()=>{
//                 this.getClickId(item.id)
//               }}> {item.text} </li>
//             )
//           }
//         </ul>
//       </div>
//     )
//   }
//   getClickId(id){
//     this.setState({
//       activeId:id
//     })
//     // 通知父组件 修改父组件状态
//     this.props.event(id)
//   }
// }

var Tabbar = (props) =>{
  return (
    <div>
      <ul className='footer'>
        {
          props.list.map(item => 
            <li 
            key={item.id} 
            className={props.activeId === item.id ? 'active' : ''} 
            onClick={()=>{
              props.event(item.id)
            }}> {item.text} </li>
          )
        }
      </ul>
    </div>
  )
}
export default Tabbar

