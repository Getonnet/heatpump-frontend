import React from 'react'
import logo from '../images/logo.png'
import MenuToggleIcon from '../images/svg/menu-toggle'
import '../styles/components/_header.scss'
import { Link } from 'react-router-dom'
import Cart from './cart'
import { useTranslation } from 'react-i18next'
import Language from '../components/languages'

export default function Header() {
  const { t } = useTranslation()
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
            <div className="language">
              <Language className={'ml-1'} />
            </div>
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
