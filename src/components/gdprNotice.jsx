import React from 'react'
import OptionsAndInfoBox from './optionsAndInfoBox'
// import '../styles/components/_options-and-text-box.scss'

import { useDispatch } from 'react-redux'
import { updateActiveInfoBox } from '../store/activeInfoBoxSlice'
import { updateActiveVideo } from '../store/activeVideoSlice'
import { useTranslation } from 'react-i18next'

export default function GDPRNotice(props) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const handleClick = () => {
    // show next info box ->
    dispatch(updateActiveInfoBox('infoTextBox1'))
    dispatch(updateActiveVideo('pointLeft'))
  }

  return (
    <OptionsAndInfoBox>
      
      <p> {t('collects')}</p>
      <p> {t('information')}</p>
      <p> {t('GDPR')}</p>
      
      {/* <p>XXXXX collects information necessary to send you its best offer.</p> */}
      {/* <p>
        This information is not shared with third parties and should only be
        used in dialogue between VKSYS and you as a customer.
      </p> */}
      {/* <p>"GDPR" text must be entered here</p> */}
      <div className='gdpr-cta' style={{ marginTop: '20px', marginBottom:'20px', position: 'relative'}}>
        <button className='btn' style={{position: 'absolute', zIndex: 10010 }} onClick={handleClick}>
          {t('accept')}
        </button>
        <br />
        <div style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, zIndex: 10000 }} ></div>
      </div>

    </OptionsAndInfoBox>
  )
}
