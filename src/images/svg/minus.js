import * as React from 'react'

function MinusIcon(props) {
  return (
    <svg
      width={12}
      height={2}
      viewBox='0 0 12 2'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        opacity={0.8}
        d='M1 1h10'
        stroke='#200E32'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default MinusIcon
