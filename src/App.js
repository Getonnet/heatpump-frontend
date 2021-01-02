import { useState, useEffect } from 'react'
import Header from './components/header'
import bodyBgImage from './images/home-bg.png'
import AssistantPerson from './components/assistant-person'
import { BrowserRouter as Router } from 'react-router-dom'

import Homepage from './pages/home'
import BrandsSelect from './pages/brandSelect'
import CartPage from './pages/cartpage'
import GDPRNotice from './components/gdprNotice'

import { useDispatch, useSelector } from 'react-redux'
import {
  updateActiveInfoBox,
  selectActiveInfoBox,
} from './store/activeInfoBoxSlice'
import { selectCartTotal, selectProducts } from './store/cartSlice'
import { updateLog } from './store/chatLogSlice'
import { updateActiveVideo } from './store/activeVideoSlice'

function App() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const cartTotal = useSelector(selectCartTotal)

  /**
   * Kindly window event listener
   * @type {{onMessage: Window.kindlyOptions.onMessage}}
   */
  const [lastChatLog, setLastChatLog] = useState({})

  window.kindlyOptions = {
    onMessage: (newMessage, chatLog) => {
      let id = newMessage.exchange_id
      console.log(newMessage)
      // on new message
      setLastChatLog(newMessage)
      dispatch(updateLog(newMessage))

      if (id === '7aeb63aa-519b-4063-a48a-97d5124e8ca3') {
        dispatch(updateActiveInfoBox('brandSelect'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === '3cd847f1-40fa-4c70-b187-273b0a604989') {
        dispatch(updateActiveInfoBox('GDPR'))
        dispatch(updateActiveVideo('pointLeft'))
      }
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

  useEffect(() => {})

  /**
   * infobox visibility logic
   */
  const activeInfoBox = useSelector(selectActiveInfoBox)

  return (
    <div className='App' style={{ backgroundImage: `url('${bodyBgImage}')` }}>
      <Router>
        <Header />

        {activeInfoBox === 'brandSelect' ? (
          <BrandsSelect />
        ) : activeInfoBox === 'GDPR' ? (
          <GDPRNotice />
        ) : activeInfoBox === 'products' ? (
          <Homepage />
        ) : activeInfoBox === 'cart' ? (
          <CartPage
            chatid={
              Object.keys(lastChatLog).length > 0 ? lastChatLog.chat_id : ''
            }
            items={products}
            total={cartTotal}
          />
        ) : (
          ''
        )}

        <AssistantPerson />
      </Router>
    </div>
  )
}

export default App
