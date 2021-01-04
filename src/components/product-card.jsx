import React, { useState } from 'react'
import '../styles/components/_product-card.scss'
import MinusIcon from '../images/svg/minus'
import PlusIcon from '../images/svg/plus'
// import HeatPumpImage from '../images/svg/heatpump-img'

export default function ProductCard({
  products,
  name,
  category,
  price,
  img,
  descriptions,
  changes,
}) {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1)
    else setQuantity(quantity)
  }

  return (
    <div className='card card--product'>
      <div className='product-image'>
        <img src={img} />
      </div>

      <div className='product-category'>{category}</div>
      <div className='product-title'>{name}</div>
      <div className='product-description'>{descriptions}</div>
      <div className='product-cta'>
        <div className='left'>
          <button
            onClick={changes}
            data-id={products}
            data-name={name}
            data-img={img}
            data-price={price}
            data-qty={quantity}
            className='add-to-cart btn'>
            Add to cart
          </button>
        </div>

        <div className='right'>
          <div className='product-quantity-selector'>
            <button className='quantity-controls' onClick={decrementQuantity}>
              <MinusIcon />
            </button>
            <input
              type='number'
              name='quantity'
              onChange={changes}
              value={quantity}
            />
            <button className='quantity-controls' onClick={incrementQuantity}>
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
