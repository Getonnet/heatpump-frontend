import React from 'react'
// import OptionsAndInfoBox from '../components/optionsAndInfoBox'
import ProductCard from '../components/product-card'
import '../styles/components/_suggested-products.scss'

export default function Homepage() {
  return (
    <div className='page-home'>
      <div className='container'>
        {/*<OptionsAndInfoBox />*/}
        <div className='suggested-products'>
          <ProductCard products={1} />
          <ProductCard products={2} />
          <ProductCard products={3} />
          <ProductCard products={4} />
          <ProductCard products={5} />
        </div>
      </div>
    </div>
  )
}
