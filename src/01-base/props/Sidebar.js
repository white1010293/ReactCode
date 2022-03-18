import React from 'react'
import propTypes from 'prop-types'

export default function Sidebar(props) {
  return (
    <div style={{background:props.bg}}>
      <ul>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
        <li>111111</li>
      </ul>
    </div>
  )
}
Sidebar.defaultProps = {
  bg:'black'
}

Sidebar.propTypes = {
  bg:propTypes.string
}
