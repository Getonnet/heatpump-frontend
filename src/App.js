import { useState, useEffect } from 'react'
import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import BrandsSelect from './pages/brandSelect'
import Homepage from './pages/home'
// import CartPage from './pages/cartpage'
import { useSelector } from 'react-redux'
import { selectActiveInfoBox } from './store/activeInfoBoxSlice'
import {
  selectCartCount,
  selectCartTotal,
  selectProducts,
} from './store/cartSlice'

function App() {
  const products = useSelector(selectProducts)
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  /**
   * Kindly window event listener
   * @type {{onMessage: Window.kindlyOptions.onMessage}}
   */
  const [message, setMessage] = useState({})
  const [chats, setChats] = useState([])

  window.kindlyOptions = {
    onMessage: (newMessage, chatLog) => {
      attachChat(newMessage, chatLog)
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
    setMessage(message)
    setChats([...chat_log])
  }

  /**
   * infobox visibility logic
   */
  const activeInfoBox = useSelector(selectActiveInfoBox)

  return (
    <div className='App' style={{ backgroundImage: `url('${bodyBgImage}')` }}>
      <Router>
        <Header />

        <Homepage />

        {/*{activeInfoBox === 'brandSelect' ? (*/}
        {/*  <BrandsSelect />*/}
        {/*) : activeInfoBox === 'products' ? (*/}
        {/*  <Homepage myChange={handleChange} />*/}
        {/*) : activeInfoBox === cart ? (*/}
        {/*  <CartPage*/}
        {/*    chatid={chats.length > 0 ? chats[0].chat_id : ''}*/}
        {/*    items={products}*/}
        {/*    total={cartTotal}*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  ''*/}
        {/*)}*/}

        <AssistantPerson />
      </Router>
    </div>
  )
}

export default App
