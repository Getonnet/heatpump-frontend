import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { selectActiveInfoBox } from './store/activeInfoBoxSlice'
import { selectProducts } from './store/cartSlice'

import Header from './components/header'
import HomePage from './pages/home'
import FAQPage from './pages/faq'
import CartPage from './pages/cartpage'
import AssistantPerson from './components/assistant-person'

function App() {
  const products = useSelector(selectProducts)
  const activeInfoBox = useSelector(selectActiveInfoBox)

  return (
    <div
      className='App'
      style={{ backgroundImage: `url('/images/home-bg.png')` }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/cart'>
            <CartPage products={products} />
          </Route>
          <Route path='/faq'>
            <FAQPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>

        {activeInfoBox !== 'cart' && <AssistantPerson />}
      </Router>
    </div>
  )
}

export default App
