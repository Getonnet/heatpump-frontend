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

export default function ProductCard({
  products,
  name,
  category,
  price,
  img,
  descriptions,
  productType,
  recommended,
  pdfLink,
}) {
  const { t } = useTranslation()
  const quantity = 1
  const [clicked, setClicked] = useState(false)
  const selectedProducts = useSelector(selectProducts)
  const dispatch = useDispatch()

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

    setClicked(true)

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
      dispatch(
        removeSelectedProducts({
          id: productID,
        })
      )
    }
  }
  // ----------- end cart calculations

  const removeProductFromCart = () => {
    dispatch(removeSelectedProducts({ id: products }))
    setClicked(false)
  }

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
        <a href={pdfLink || '#'} target='_blank'>
          <img src={img} alt={name} />
        </a>
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
            {/* Add to cart */}
            {clicked ? (
              <span>{t('Added!')}</span>
            ) : (
              <span>{t('Addtocart')}</span>
            )}
          </button>
        </div>

        <div className='right'>
          <div className='moneySection'>
            <b className='money'>{price} kr</b>
          </div>
        </div>
      </div>
      <div className='extra'>
        {clicked ? (
          <span className='remove-link' onClick={removeProductFromCart}>
            {t('Remove from cart')}
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
