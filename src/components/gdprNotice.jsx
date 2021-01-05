import React from 'react'
import OptionsAndInfoBox from './optionsAndInfoBox'
// import '../styles/components/_options-and-text-box.scss'

import { useDispatch } from 'react-redux'
import { updateActiveInfoBox } from '../store/activeInfoBoxSlice'
import { updateActiveVideo } from '../store/activeVideoSlice'

export default function GDPRNotice(props) {
  const dispatch = useDispatch()
  const handleClick = () => {
    // show next info box ->
    dispatch(updateActiveInfoBox('infoTextBox1'))
    dispatch(updateActiveVideo('pointLeft'))
  }

  return (
    <OptionsAndInfoBox>
      <p>XXXXX collects information necessary to send you its best offer.</p>
      <p>
        This information is not shared with third parties and should only be
        used in dialogue between VKSYS and you as a customer.
      </p>
      <p>"GDPR" text must be entered here</p>
      <div className='gdpr-cta'>
        <button className='btn' onClick={handleClick}>
          I accept
        </button>
      </div>
    </OptionsAndInfoBox>
  )
}