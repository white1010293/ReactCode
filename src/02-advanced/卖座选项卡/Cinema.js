import React, { Component } from 'react'
import axios from 'axios'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
  constructor(){
    super()
    this.state = {
      cnimaList:[],
      iptVal:''
    }

    axios({
      url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2572343',
      method:"get",
      headers:{
        'X-Client-Info':'{  "a":"3000","ch":"1002","v":"5.2.0","e":"16475043614848266457907201","bc":"110100"}',
        'X-Host':'mall.film-ticket.cinema.list'
    }}).then(res=>{
      console.log('axios')
      console.log(res.data.data.cinemas)
      this.setState({
        cnimaList:res.data.data.cinemas
      },()=>{
        new BScroll('.wrapper')
      })
    }).catch(err=>{
      console.log(err)
      
    })
    
    
  }

  render() {
    return (
      <div className='wrapper' style={{height:'100vh',overflow:'hidden',boxSizing:'border-box'}}>
        <div className=' content'>
          <input type="text" placeholder="请输入内容" className='cinemaIpt' onInput={this.getIptVal}/>
          <ul className='cinema' style={{paddingBottom:'51px'}}>
            {this.state.cnimaList.filter(item => {
                if(this.state.iptVal === ''){
                  return true
                }
                return item.name.toUpperCase().includes(this.state.iptVal.toUpperCase()) || item.address.toUpperCase().includes(this.state.iptVal.toUpperCase())
              }).map(item => 
              <li key={item.cinemaId}>
                <h4>{item.name}</h4>
                <p>{item.address}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
  getIptVal = (e)=>{
    console.log(e.target.value)
    this.setState({
      iptVal:e.target.value
    },()=>{
      new BScroll('.wrapper')
    })
  }
}
