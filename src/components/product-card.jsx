import React, { useState } from 'react'
import HeatPumpImage from '../images/svg/heatpump-img'
import '../styles/components/_product-card.scss'
import MinusIcon from '../images/svg/minus'
import PlusIcon from '../images/svg/plus'

export default function ProductCard({products}) {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1)
    else setQuantity(quantity)
  }

  const handleChange = (e) => {
    // do nothing
    // setQuantity(quantity)
    const id = e.currentTarget.dataset.id;
    console.log(id);
  }

  return (
    <div className='card card--product'>
      <div className='product-image'>
        <HeatPumpImage />
      </div>

      <div className='product-category'>STYLISH</div>
      <div className='product-title'>Daikin Stylish 105s</div>
      <div className='product-description'>
        Daikin Stylish combines excellent design and technology to deliver a
        total climate solution for any interior.
      </div>
      <div className='product-cta'>
        <div className='left'>
          <button onClick={handleChange} data-id={products} className='add-to-cart btn'>Add to cart</button>
        </div>

        <div className='right'>
          <div className='product-quantity-selector'>
          <button className='quantity-controls' onClick={decrementQuantity}>
              <MinusIcon />
            </button>
            <input
              type='number'
              name='quantity'
              onChange={handleChange}
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
