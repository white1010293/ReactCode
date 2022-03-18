import React from 'react'

export default function Filed(props) {
  return (
    <label>
      <span style={{width:'60px',display:'inline-block',textAlign:"right",paddingRight:'5px'}}>{props.lable || '测试'}</span>
      <input type={props.type}  value={props.value}
      onChange={(e)=>{
        props.event(e.target.value)
      }}/>
      <br/>
    </label>
  )
}
