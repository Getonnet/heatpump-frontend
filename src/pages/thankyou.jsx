import React from 'react'
import { useTranslation } from 'react-i18next'
import thanksPhoto from '../images/thumbs-up.png'

import '../styles/pages/_thanks.scss'

function Thankyou(props) {
  const { t } = useTranslation()

  return (
    <div className='thanks-page'>
      <div className='container'>
        <h1>{t('thanks')}</h1>
        <img src={thanksPhoto} alt='Thanks' />
      </div>
    </div>
  )
}

export default Thankyou
