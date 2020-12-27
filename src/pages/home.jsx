import React from 'react'
// import OptionsAndInfoBox from '../components/optionsAndInfoBox'
import ProductCard from '../components/product-card'
import '../styles/components/_suggested-products.scss'

export default function Homepage({myChange}) {
  return (
    <div className='page-home'>
      <div className='container'>
        {/*<OptionsAndInfoBox />*/}
        <div className='suggested-products'>
          <ProductCard products={1} changes={myChange} />
          <ProductCard products={2} changes={myChange} />
          <ProductCard products={3} changes={myChange} />
          <ProductCard products={4} changes={myChange} />
          <ProductCard products={5} changes={myChange} />
        </div>
      </div>
    </div>
  )
}
