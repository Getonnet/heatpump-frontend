import React, { useEffect } from 'react'

import Products from '../components/products'
import BrandsSelect from '../components/brandSelect'
import GDPRNotice from '../components/gdprNotice'
import InfoTextBox1 from '../components/infoTextBox1'
import CartPage from './cartpage'

import '../styles/pages/_home.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
  updateActiveInfoBox,
  selectActiveInfoBox,
} from '../store/activeInfoBoxSlice'
import { selectProducts } from '../store/cartSlice'
import {
  updateLog,
  setChatId,
  setIsIsolated,
  setAreaToHeat,
} from '../store/chatLogSlice'
import { updateActiveVideo } from '../store/activeVideoSlice'

export default function HomePage() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  /**
   * Kindly window event listener
   * @type {{onMessage: Window.kindlyOptions.onMessage}}
   */
  // const [lastChatLog, setLastChatLog] = useState({})
  let lastTwoMessagesArr = []

  const setLastTwoMessages = message => {
    if (lastTwoMessagesArr.length > 1) {
      lastTwoMessagesArr = []
    }
    lastTwoMessagesArr.push(message)
  }

  window.kindlyOptions = {
    onMessage: (newMessage, chatLog) => {
      let id = newMessage.exchange_id
      let message = newMessage.message || ''
      // set new last message if 'message' property found
      setLastTwoMessages(message)
      console.log(newMessage)
      // setLastChatLog(newMessage)
      dispatch(updateLog(newMessage))
      // console.log('second last message is: -- :')
      // console.log(lastTwoMessagesArr)

      if (id === '7aeb63aa-519b-4063-a48a-97d5124e8ca3') {
        // greetings
        dispatch(setChatId(newMessage.chat_id))
        dispatch(updateActiveInfoBox('brandSelect'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === '3cd847f1-40fa-4c70-b187-273b0a604989') {
        // second step show gdpr
        dispatch(updateActiveInfoBox('GDPR'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === 'ef0c6925-4a71-49ca-a7f2-92914f167cec') {
        // name, email, phone, address collected, now asked size of apartment
        dispatch(updateActiveVideo('nodding'))
      } else if (id === '1dac94f9-72ff-4510-8f0c-9cb355ae3d1f') {
        // set area to heat
        dispatch(setAreaToHeat(lastTwoMessagesArr[0]))
      } else if (
        id === 'ec951d8f-9caf-42db-b87e-5584b59bc8ca' &&
        lastTwoMessagesArr[0] === 'Dårlig'
      ) {
        // is you hour isolated: bad
        dispatch(updateActiveVideo('freezing'))
        dispatch(setIsIsolated('Dårlig'))
      } else if (
        id === 'ec951d8f-9caf-42db-b87e-5584b59bc8ca' &&
        lastTwoMessagesArr[0] === 'Godt'
      ) {
        // is you hour isolated: well
        dispatch(updateActiveVideo('thumbsUp'))
        dispatch(setIsIsolated('Godt'))
      } else if (
        id === '88ee375d-fbe5-49bb-865d-46113d9d87dc' ||
        id === '11c125a9-bde0-4b87-9bf4-4ffb028d74f2'
      ) {
        // see products triggered
        // second id '11c......' come when user decides to
        // change his order after all the steps taken first time
        dispatch(updateActiveInfoBox('products'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === '5b44ef0f-6d41-454b-a5a7-9f6d8cc3c67c') {
        // product selected
        dispatch(updateActiveVideo('thumbsUp'))
        dispatch(updateActiveInfoBox(''))
      } else if (id === 'c495b32e-a1a8-4003-9b8d-a58e7b9d0000') {
        // moving on after reading more avout product
        dispatch(updateActiveVideo('nodding'))
      } else if (
        id === 'b6eef6d9-1f0d-445d-a364-148fe89d8600' ||
        id === '41ffd8bc-88ac-48d8-8576-be248fba4a1c'
      ) {
        // suggested products
        // second id '41ff.....' come when user decides to
        // change his order after all the steps taken first time
        dispatch(updateActiveInfoBox('suggested-products'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (
        id === 'bb30d142-7dc3-4efd-98fb-0b7abdbb388a' ||
        id === 'a6b801ea-7ceb-456a-a7bc-e68a0dcd46ce' ||
        id === '6eb732d0-efae-4a82-aeeb-2ffd6d61b62f'
      ) {
        // confirmation of all info collected, so show cart
        // second id 'a6b.........' is after user decides to reslect something
        dispatch(updateActiveInfoBox('cart'))
      } else if (id === '3dd3b9ff-dbbf-4d41-8efd-e24a28638114') {
        // user decides to make a change, and list of all chanage able option appears
        dispatch(updateActiveInfoBox(''))
        dispatch(updateActiveVideo('greet'))
      }
    },
  }

  // init kindly chat
  useEffect(() => {
    /*---- old chat bot -----*/
    // let script = document.createElement('script')
    // script.src = 'https://chat.kindlycdn.com/kindly-chat.js'
    // script.async = true
    // script.id = 'kindly-chat'
    // script.setAttribute('data-shadow-dom', '1')
    // script.setAttribute('data-bot-key', 'e77a739f-9ac2-4707-8c4c-30ae6b77ed4b')
    // document.body.appendChild(script)

    /*---- new chat bot -----*/
    let script = document.createElement('script')
    script.src = 'https://chat.kindlycdn.com/kindly-chat.js'
    script.async = true
    script.id = 'kindly-chat'
    script.setAttribute('data-shadow-dom', '1')
    script.setAttribute('data-bot-key', '0877eb48-abe6-42e7-9104-e1c9dd06593c')
    document.body.appendChild(script)
  })
  // ----- END kindly window event listener
  /**
   * infobox visibility logic
   */
  const activeInfoBox = useSelector(selectActiveInfoBox)

  return (
    <div className='content-box'>
      {activeInfoBox === 'brandSelect' ? (
        <BrandsSelect />
      ) : activeInfoBox === 'GDPR' ? (
        <GDPRNotice />
      ) : activeInfoBox === 'infoTextBox1' ? (
        <InfoTextBox1 />
      ) : activeInfoBox === 'products' ? (
        <Products productType={'products'} />
      ) : activeInfoBox === 'suggested-products' ? (
        <Products productType={'suggested-products'} />
      ) : activeInfoBox === 'cart' ? (
        <CartPage products={products} />
      ) : (
        ''
      )}
    </div>
  )
}
