import React from 'react'
import '../styles/components/_options-and-text-box.scss'
import { useTranslation } from 'react-i18next'

export default function OptionsAndInfoBox(props) {
  const { t } = useTranslation()
  return (
    <div className='options-box'>
      <div className='container'>
        <div className='text-box'>{props.children}</div>
      </div>
    </div>
  )
}
