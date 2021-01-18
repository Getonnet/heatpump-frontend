import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import configure from '../config.js'

import '../styles/components/_suggested-products.scss'

import ProductCard from './product-card'
import { selectIsIsolated, selectAreaToHeat } from '../store/chatLogSlice'

export default function Products(props) {
  const { t } = useTranslation()
  const productType = props.productType
  const [allProducts, setAllProducts] = useState([])
  const size = useSelector(selectAreaToHeat)
  const condition = useSelector(selectIsIsolated)

  useEffect(() => {
    async function fetchProducts() {
      let params = `Heater&size=${size}&condition=${condition}`
      if (productType === 'suggested-products') {
        params = 'Accessories'
      }

      axios
        .get(configure.API_URL + `product-recommend?types=${params}`)
        .then(response => {
          console.log(response.data)
          setAllProducts(response.data)

          //console.log(response.data);

        })
    }
    fetchProducts()
  }, [productType, size, condition])


  return (
    <div className='page-home'>
      <div className='container'>
        <div className='suggested-products productType'>
          {allProducts
            .sort((a, b) => b.is_recommend - a.is_recommend)
            .map(product => (
              <ProductCard
                key={product.id}
                products={product.id}
                name={product.name}
                img={product.photo}
                price={product.price}
                descriptions={product.descriptions}
                category={product.category}
                productType={productType}
                recommended={product.is_recommend}
                pdfLink={product.urls}
              />
            ))}
        </div>

        <div className='scroll-down'>
          <div className='scroll-down-wrap'>
            <div className='outer-border' />
            <div className='inner-space' />
            <div className='inner-bg' />
            <div className='core'>
              <span className='text'>{t('Scroll down')}</span>
            </div>
          </div>
        </div>
        {/* end scroll down btn */}
      </div>
    </div>
  )
}
