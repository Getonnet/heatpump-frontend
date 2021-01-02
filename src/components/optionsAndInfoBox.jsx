import React from 'react'
import '../styles/components/_options-and-text-box.scss'

export default function OptionsAndInfoBox(props) {
  return (
    <div className='options-box'>
      <div className='container'>
        <div className='text-box'>{props.children}</div>
      </div>
    </div>
  )
}
