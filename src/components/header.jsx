import React from 'react'
import { Link } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'

import Language from '../components/languages'
import Cart from './cart'
import logo from '../images/logo.png'
import FAQIcon from '../images/svg/faq'
// import MenuToggleIcon from '../images/svg/menu-toggle'

import '../styles/components/_header.scss'



export default function Header() {
  // const { t } = useTranslation()


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
              <Cart />
            </div>
            <div className='menu-toggle'>
              <a href='/faq'>
               <FAQIcon/>
              </a>
            </div>
            <div className='header-language'>
              <Language />
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </header>
  )
}
