import React from 'react'
import "./inputOptions.css"


const inputOption = ({Icon, title, color}) => {
  return (
    <div className='inputOption'>
      <Icon style={{olor:color}} />
      <h4>{title}</h4>

    </div>
  )
}

export default inputOption;