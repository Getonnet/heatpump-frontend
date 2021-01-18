import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//import { selectActiveInfoBox } from './store/activeInfoBoxSlice'
import { selectProducts } from './store/cartSlice'

import Header from './components/header'
import HomePage from './pages/home'
import FAQPage from './pages/faq'
import CartPage from './pages/cartpage'
//import AssistantPerson from './components/assistant-person'
import RequestOrder from './pages/requestOrder'
import Thankyou from './pages/thankyou'
import TermsPage from './pages/terms'

function App() {
  const products = useSelector(selectProducts)
  //const activeInfoBox = useSelector(selectActiveInfoBox)

  return (
    <div
      className='App'
      style={{ backgroundImage: `url('/images/home-bg.png')` }}>
      <Header />
      <Switch>
        <Route
          path='/cart'
          render={props => <CartPage {...props} products={products} />}
        />
        <Route path='/faq' render={props => <FAQPage {...props} />} />
        <Route
          path='/request-order'
          render={props => <RequestOrder {...props} />}
        />
        <Route path='/thanks' render={props => <Thankyou {...props} />} />
        <Route path='/vilkår' render={props => <TermsPage {...props} />} />
        <Route path='/vilk%C3%A5r' render={props => <TermsPage {...props} />} />
        <Route path='/' render={props => <HomePage {...props} />} />
      </Switch>
    </div>
  )
}

export default App
