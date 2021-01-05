import React, { useState } from 'react'
import '../styles/components/_product-card.scss'
// import MinusIcon from '../images/svg/minus'
// import PlusIcon from '../images/svg/plus'
// import HeatPumpImage from '../images/svg/heatpump-img'

export default function ProductCard({
  products,
  name,
  category,
  price,
  img,
  descriptions,
}) {
  // const [quantity, setQuantity] = useState(1)
  const quantity = 1

  // const incrementQuantity = () => {
  //   setQuantity(quantity + 1)
  // }

  // const decrementQuantity = () => {
  //   if (quantity > 0) setQuantity(quantity - 1)
  //   else setQuantity(quantity)
  // }
  const [selectedProducts, setSelectedProducts] = useState([])

  // ----------- start cart calculations
  const handleChange = e => {
    let productID = e.currentTarget.dataset.id
    let quantity = e.currentTarget.dataset.qty
    let price = e.currentTarget.dataset.price
    let name = e.currentTarget.dataset.name
    let img = e.currentTarget.dataset.img

    let currentItem = selectedProducts

    if (parseInt(quantity) !== 0) {
      let i = currentItem.findIndex(x => x.id === productID)

      if (i > -1) {
        // Update product quantity if exist
        currentItem[i].qty = quantity
      } else {
        currentItem.push({
          id: productID,
          qty: quantity,
          prices: price,
          names: name,
          photo: img,
        })
      }
      setSelectedProducts(currentItem)
    } else {
      let curItems = currentItem.filter((x, index, arr) => x.id !== productID)
      setSelectedProducts(curItems)
    }
    // setCartCount(selectedProducts.length)
    getTotal()
  }

  const getTotal = () => {
    // let amount = selectedProducts.map(x => x.qty * x.prices)
    // let total = amount.reduce((a, b) => {
    //   return a + b
    // }, 0)
    // setCartTotal(total)
  }
  // ----------- end cart calculations

  return (
    <div className='card card--product'>
      <div className='product-image'>
        <img src={img} alt={name} />
      </div>

      <div className='product-category'>{category}</div>
      <div className='product-title'>{name}</div>
      <div className='product-description'>{descriptions}</div>
      <div className='product-cta'>
        <div className='left'>
          <button
            onClick={handleChange}
            data-id={products}
            data-name={name}
            data-img={img}
            data-price={price}
            data-qty={quantity}
            className='add-to-cart btn'>
            Add to cart
          </button>
        </div>

        {/* <div className='right'>
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
        </div> */}
      </div>
    </div>
  )
}
