import { useState } from 'react'
import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import BrandsSelect from './pages/brandSelect'
import Homepage from './pages/home'
import CartPage from './pages/cartpage'

function App() {
  const [item, setItem] = useState([])
  const [cart, setCart] = useState(0)
  const [amounts, setAmounts] = useState(0)

  const handleChange = e => {
    let productID = e.currentTarget.dataset.id
    let quantity = e.currentTarget.dataset.qty
    let price = e.currentTarget.dataset.price
    let name = e.currentTarget.dataset.name
    let img = e.currentTarget.dataset.img

    let currentItem = item

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
      setItem(currentItem)
    } else {
      let curItems = currentItem.filter((x, index, arr) => x.id !== productID)
      setItem(curItems)
    }
    setCart(item.length)

    getTotal()
  }

  const getTotal = () => {
    let amount = item.map(x => x.qty * x.prices)

    let total = amount.reduce((a, b) => {
      return a + b
    }, 0)

    setAmounts(total)
  }

  return (
    <div className='App' style={{ backgroundImage: `url('${bodyBgImage}')` }}>
      <Router>
        <Header items={cart} />

        <Switch>
          <Route path='/cart'>
            <CartPage items={item} total={amounts} />
          </Route>
          <Route path='/brands'>
            <BrandsSelect />
          </Route>
          <Route path='/'>
            <Homepage myChange={handleChange} />
          </Route>
        </Switch>

        <AssistantPerson />
      </Router>
    </div>
  )
}

export default App
