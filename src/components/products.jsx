import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

// import OptionsAndInfoBox from '../components/optionsAndInfoBox'
import ProductCard from './product-card'
// import ScrollDownIcon from '../images/svg/scroll-down'
import configure from '../config.js'
import '../styles/components/_suggested-products.scss'

export default function Products(props) {
  const { t } = useTranslation()
  const productType = props.productType
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      let params = 'AC'
      if (productType === 'suggested-products') {
        params = 'Accessories'
      }
      axios
        .get(configure.API_URL + `product-recommend?types=${params}`)
        .then(response => {
          setAllProducts(response.data)
        })
    }
    fetchProducts()
  }, [productType])

  return (
    <div className='page-home'>
      <div className='container'>
        <div className='suggested-products'>
          {allProducts.map(product => (
            <ProductCard
              key={product.id}
              products={product.id}
              name={product.name}
              img={product.photo}
              price={product.price}
              descriptions={product.descriptions}
              category={product.category}
              productType={productType}
            />
          ))}
        </div>

        <div className='scroll-down'>
          {/* <ScrollDownIcon /> */}
          <div className='outer-border'>
            <div className='inner-space'>
              <div className='inner-bg'>
                <div className='core'>
                  <span className='text'>{t('Scroll down')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
