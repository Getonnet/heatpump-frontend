import React from 'react'
import logo from '../images/logo.svg'
import MenuToggleIcon from '../images/svg/menu-toggle'
import '../styles/components/_header.scss'

export default function Header() {
  return (
    <header className='App-header'>
      <div className='container'>
        <div className='row'>
          <div className='brand'>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div className='menu-toggle'>
            <MenuToggleIcon />
          </div>
        </div>
      </div>
    </header>
  )
}
