import * as React from 'react'

function InputEmailIcon(props) {
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
        d='M37 22.75c0-.962-.81-1.75-1.8-1.75H20.8c-.99 0-1.8.788-1.8 1.75m18 0v10.5c0 .962-.81 1.75-1.8 1.75H20.8c-.99 0-1.8-.788-1.8-1.75v-10.5m18 0l-9 6.125-9-6.125'
        stroke='#fff'
        strokeWidth={1.6}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default InputEmailIcon
