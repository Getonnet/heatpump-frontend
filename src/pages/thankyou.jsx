import React from 'react'
import { useTranslation } from 'react-i18next'
import thanksPhoto from '../images/thankyou.jpg'

function Thankyou(props) {
  const { t } = useTranslation()

  return (
    <div className='cart-page'>
      <div className='container'>
        <div className={'card card--cart'}>
          <h1>{t('thanks')}</h1>
          <img src={thanksPhoto} alt='Thanks' />
        </div>
      </div>
    </div>
  )
}

export default Thankyou
