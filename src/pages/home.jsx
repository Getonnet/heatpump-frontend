import React, { useState, useEffect } from 'react'
// import OptionsAndInfoBox from '../components/optionsAndInfoBox'
import ProductCard from '../components/product-card'
import '../styles/components/_suggested-products.scss'
import configure from '../config.js'
import axios from 'axios'

export default function Homepage({ myChange }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      axios.get(configure.API_URL + 'product-recommend').then(response => {
        setProducts(response.data)
      })
    }
    fetchProducts()
  }, [])

  return (
    <div className='page-home'>
      <div className='container'>
        {/*<OptionsAndInfoBox />*/}
        <div className='suggested-products'>
          {products.map(row => (
            <ProductCard
              key={row.id}
              products={row.id}
              name={row.name}
              img={row.photo}
              price={row.price}
              descriptions={row.descriptions}
              category={row.category}
              changes={myChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
