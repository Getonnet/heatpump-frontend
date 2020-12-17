import * as React from 'react'

function InputNameIcon(props) {
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
        d='M35 36v-1.778c0-.943-.369-1.847-1.025-2.514a3.473 3.473 0 00-2.475-1.041h-7c-.928 0-1.819.374-2.475 1.041A3.584 3.584 0 0021 34.222V36m10.5-12.444c0 1.963-1.567 3.555-3.5 3.555s-3.5-1.592-3.5-3.555C24.5 21.592 26.067 20 28 20s3.5 1.592 3.5 3.556z'
        stroke='#fff'
        strokeWidth={1.6}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default InputNameIcon
