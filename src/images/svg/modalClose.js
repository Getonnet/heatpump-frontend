import * as React from 'react'

function ModalCloseIcon(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect width={20} height={20} rx={10} fill='#19C3FF' />
      <path
        d='M13 7l-6 6m0-6l6 6'
        stroke='#fff'
        strokeWidth={1.6}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default ModalCloseIcon
