import React from 'react'
import { useTranslation } from 'react-i18next'

export default function MobileUsersNotice() {
  const { t } = useTranslation()
  return (
    <div className='container'>
      <h4> { t('mobile') } </h4>
      <p> { t('larger') } </p>
      {/* <h4>This site is not optimized for mobile devices</h4> */}
      {/* <p>Please visit from a larger screen device</p> */}
    </div>
  )
}
