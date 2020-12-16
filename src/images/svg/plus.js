import * as React from 'react'

function PlusIcon(props) {
  return (
    <svg
      width={12}
      height={12}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        opacity={0.8}
        d='M6 1v10M1 6h10'
        stroke='#200E32'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default PlusIcon
