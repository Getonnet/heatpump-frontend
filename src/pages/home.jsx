import React, { useState, useEffect } from 'react'
// import OptionsAndInfoBox from '../components/optionsAndInfoBox'
import ProductCard from '../components/product-card'
import '../styles/components/_suggested-products.scss'
import configure from '../config.js'
import axios from 'axios'

export default function Homepage() {
  const [products, setProducts] = useState([])

  const [selectedProducts, setSelectedProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

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
    setCartCount(selectedProducts.length)
    getTotal()
  }

  const getTotal = () => {
    let amount = selectedProducts.map(x => x.qty * x.prices)

    let total = amount.reduce((a, b) => {
      return a + b
    }, 0)

    setCartTotal(total)
  }
  // ----------- end cart calculations

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
              changes={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
