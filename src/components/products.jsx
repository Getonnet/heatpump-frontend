import React, { useState, useEffect } from 'react'
// import OptionsAndInfoBox from '../components/optionsAndInfoBox'
import ProductCard from './product-card'
import ScrollDownIcon from '../images/svg/scroll-down'
import '../styles/components/_suggested-products.scss'
import configure from '../config.js'
import axios from 'axios'

export default function Products(props) {
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
          <ScrollDownIcon />
        </div>
      </div>
    </div>
  )
}
