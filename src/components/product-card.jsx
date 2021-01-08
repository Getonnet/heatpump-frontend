import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  addSelectedProducts,
  removeSelectedProducts,
  updateProductQuantity,
  selectProducts,
} from '../store/cartSlice'

import '../styles/components/_product-card.scss'
import '../styles/components/_badge.scss'

import MinusIcon from '../images/svg/minus'
import PlusIcon from '../images/svg/plus'

export default function ProductCard({
  products,
  name,
  category,
  price,
  img,
  descriptions,
  productType,
  recommended,
}) {
  const { t } = useTranslation()
  const [quantity, setQuantity] = useState(1)
  const selectedProducts = useSelector(selectProducts)
  const dispatch = useDispatch()
  // const [selectedProducts, setSelectedProducts] = useState([])

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1)
    else setQuantity(quantity)
  }

  // ----------- start cart calculations
  const handleChange = e => {
    let data = e.currentTarget.dataset
    let productID = data.id
    let quantity = data.qty
    let price = data.price
    let name = data.name
    let img = data.img
    let productType = data.producttype
    let recommended = data.is_recommend
    // let currentCartItems = ([...selectedProducts])

    if (parseInt(quantity) !== 0) {
      let i = Object.keys(selectedProducts).findIndex(x => x.id === productID)

      if (i > -1) {
        // Update product quantity if exist
        dispatch(
          updateProductQuantity({
            id: productID,
            qty: quantity,
          })
        )
      } else {
        dispatch(
          addSelectedProducts({
            id: productID,
            product: {
              id: productID,
              qty: quantity,
              prices: price,
              names: name,
              photo: img,
              productType,
              recommended,
            },
          })
        )
      }
    } else {
      // remove product which has quantity of 0
      dispatch(
        removeSelectedProducts({
          id: productID,
        })
      )
      // dispatch(updateCart(filteredCartItems))
    }
  }

  // ----------- end cart calculations

  return (
    <div
      className={
        recommended ? 'card card--product recommended ' : 'card card--product'
      }>
      {recommended && (
        <div className='neon-badge'>
          <span />
          <span />
          <span />
          <span />
          {t('we recommend')}
        </div>
      )}

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
            data-producttype={productType}
            className='add-to-cart btn'>
            {t('Addtocart')}
            {/* Add to cart */}
          </button>
        </div>

        {productType !== 'products' && (
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
        )}
      </div>
    </div>
  )
}
