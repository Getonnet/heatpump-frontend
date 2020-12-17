import * as React from 'react'

function InputPhoneIcon(props) {
  return (
    <svg
      width={56}
      height={56}
      viewBox='0 0 56 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect width={56} height={56} rx={28} fill='#19C3FF' />
      <path
        d='M28 33.4h.01M23 19h10c1.105 0 2 .806 2 1.8v14.4c0 .994-.895 1.8-2 1.8H23c-1.105 0-2-.806-2-1.8V20.8c0-.994.895-1.8 2-1.8z'
        stroke='#fff'
        strokeWidth={1.6}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default InputPhoneIcon
