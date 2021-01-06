import React from 'react'
import OptionsAndInfoBox from './optionsAndInfoBox'
// import '../styles/components/_options-and-text-box.scss'
import { useTranslation } from 'react-i18next'

export default function InfoTextBox1() {
  const { t } = useTranslation()
  return (
    <OptionsAndInfoBox>
      <p> { t('ask') }</p>
      {/* <p>
        I will now ask some questions to be able to give advice on which heat
        pump models may be relevant for you and what will be the correct
        capacity of the heat pump.
      </p> */}
    </OptionsAndInfoBox>
  )
}
