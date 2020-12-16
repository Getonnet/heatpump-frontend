import React from 'react'
import CartIcon from '../images/svg/cart'
import '../styles/components/_cart-component.scss'

export default function Cart(props) {
  return (
    <div className='cart-icon'>
      <CartIcon />
      <span className='cart-num'>{props.cartCount}</span>
    </div>
  )
}
