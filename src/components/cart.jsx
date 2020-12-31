import React from 'react'
import CartIcon from '../images/svg/cart'
import '../styles/components/_cart-component.scss'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'

export default function Cart() {
  const cartCount = useSelector(selectCartCount)

  return (
    <div className='cart-icon'>
      <CartIcon />
      <span className='cart-num'>{cartCount}</span>
    </div>
  )
}
