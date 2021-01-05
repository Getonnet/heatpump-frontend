import React, { useEffect } from 'react'
import CartIcon from '../images/svg/cart'
import '../styles/components/_cart-component.scss'
import { useSelector } from 'react-redux'
import { selectProducts } from '../store/cartSlice'
// import { selectCartCount } from '../store/cartSlice'

export default function Cart() {
  const selectedProducts = useSelector(selectProducts)
  let productsArr = Object.values(selectedProducts)
  console.log(selectedProducts)
  let cartCount = 0

  if (productsArr.length) {
    if (productsArr.length > 1) {
      cartCount = Object.values(selectedProducts).reduce(
        (a, b) => a + parseInt(b['qty']),
        0
      )
    } else {
      cartCount = productsArr[0].qty
    }
  }

  useEffect(() => {}, [selectedProducts])

  return (
    <div className='cart-icon'>
      <CartIcon />
      <span className='cart-num'>{cartCount}</span>
    </div>
  )
}
