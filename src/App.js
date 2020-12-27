import React, { useState } from 'react'
import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import BrandsSelect from './pages/brandSelect'
import Homepage from './pages/home'
import CartPage from './pages/cartpage'

function App() {

  const [item, setItem] = useState([])
  const [cart, setCart] = useState(0)

  const handleChange = (e) => {
    let productID = e.currentTarget.dataset.id;
    let quantity = e.currentTarget.dataset.qty;

    let currentItem = item;
    
    if(quantity != 0){
       let i = currentItem.findIndex(x => x.id == productID);

       if(i > -1){ // Update product quantity if exist
        currentItem[i].qty = quantity;
       }else{
        currentItem.push({id:productID, qty:quantity});
       }
       setItem(currentItem);
    }else{
      let curItems = currentItem.filter((x, index, arr) => x.id !== productID);
      setItem(curItems);
    }
    setCart(item.length);
  }

  return (
    <div className='App' style={{ backgroundImage: `url('${bodyBgImage}')` }}>
      <Router>
        <Header items={cart} />

        <Switch>
          <Route path="/cart">
            <CartPage items={item} />
          </Route>
          <Route path="/brands">
            <BrandsSelect />
          </Route>
          <Route path="/">
            <Homepage myChange={handleChange} />
          </Route>
        </Switch>

        <AssistantPerson />
      </Router>
    </div>
  )
}

export default App
