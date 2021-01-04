import React from 'react'
import logo from '../images/logo.svg'
import MenuToggleIcon from '../images/svg/menu-toggle'
import '../styles/components/_header.scss'
import { Link } from 'react-router-dom'
import Cart from './cart'

export default function Header() {
  return (
    <header className='App-header'>
      <div className='container'>
        <div className='row'>
          <div className='left'>
            <div className='brand'>
              <Link to={'/'}>
                <img src={logo} className='App-logo' alt='logo' />
              </Link>
            </div>
          </div>

          <div className='right'>
            <div className='header-cart'>
              <Link to={'/cart'}>
                <Cart />
              </Link>
            </div>
            <div className='menu-toggle'>
              <MenuToggleIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
