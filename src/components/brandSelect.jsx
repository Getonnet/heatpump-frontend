import React from 'react'
import { useDispatch } from 'react-redux'
import { clearActiveInfoBox } from '../store/activeInfoBoxSlice'

import '../styles/components/_brand-select.scss'

import LogoNew from '../images/svg/newLogo'
import DaikinLogo from '../images/brand-logos/daikin.png'
import GreeLogo from '../images/brand-logos/gree.png'
import NovapLogo from '../images/brand-logos/novap.png'
// import BrandLogosIcon from '../images/svg/brandLogosIcon'

export default function BrandsSelect() {
  const dispatch = useDispatch()

  const updateSelectedBrand = () => {
    dispatch(clearActiveInfoBox())
  }

  return (
    <div className='brand-select'>
      <div className='container'>
        <div className='brand-select-menu'>
          <div className='bg-circle' />
          <div className='main-brand-logo'>
            <LogoNew />
          </div>

          <div className='brand-logos-wrap'>
            <div className='brand-logo'>
              <img
                src={DaikinLogo}
                alt='daikin-logo'
                onClick={updateSelectedBrand}
              />
            </div>

            <div className='brand-logo disabled'>
              <img src={GreeLogo} alt='gree-logo' />
            </div>

            <div className='brand-logo disabled'>
              <img src={NovapLogo} alt='novap-logo' />
            </div>

            <div className='brand-logo'>
              <img
                src={DaikinLogo}
                alt='daikin-logo'
                onClick={updateSelectedBrand}
              />
            </div>

            <div className='brand-logo disabled'>
              <img src={GreeLogo} alt='gree-logo' />
            </div>

            <div className='brand-logo disabled'>
              <img src={NovapLogo} alt='novap-logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
