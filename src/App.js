import { useState, useEffect } from 'react'
import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import BrandsSelect from './pages/brandSelect'
import Homepage from './pages/home'
import CartPage from './pages/cartpage'

function App() {
  /**
   * Kindly window event listener
   * @type {{onMessage: Window.kindlyOptions.onMessage}}
   */
  const [message, setMessage] = useState({})
  const [chats, setChats] = useState([])

  const [item, setItem] = useState([])
  const [cart, setCart] = useState(0)
  const [amounts, setAmounts] = useState(0)

  window.kindlyOptions = {
    onMessage: (newMessage, chatLog) => {
      attachChat(newMessage, chatLog);
    },

  }
  // init kindly chat
  useEffect(() => {
    let script = document.createElement('script')
    script.src = 'https://chat.kindlycdn.com/kindly-chat.js'
    script.async = true
    script.id = 'kindly-chat'
    script.setAttribute('data-shadow-dom', '1')
    script.setAttribute('data-bot-key', 'e77a739f-9ac2-4707-8c4c-30ae6b77ed4b')
    document.body.appendChild(script)
  })
  // ----- END kindly window event listener

  const attachChat = (message, chat_log) => {
     setMessage(message);
     setChats([...chat_log]);
  }


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
            <CartPage chatid={chats.length > 0 ? chats[0].chat_id : ''} items={item} total={amounts} />
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
