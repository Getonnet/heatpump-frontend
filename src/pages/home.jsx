import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Products from '../components/products'
import BrandsSelect from '../components/brandSelect'
import GDPRNotice from '../components/gdprNotice'
import InfoTextBox1 from '../components/infoTextBox1'
import CartPage from './cartpage'
import AssistantPerson from '../components/assistant-person'
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
  const history = useHistory();
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
     // console.log(newMessage)
      // setLastChatLog(newMessage)
      dispatch(updateLog(newMessage))
      // console.log('second last message is: -- :')
      // console.log(lastTwoMessagesArr)

      if (id === '950fdda2-c20c-4e40-95ca-8dbfb6f5740a') {
        // greetings
        dispatch(setChatId(newMessage.chat_id))
        dispatch(updateActiveInfoBox('brandSelect'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === '9604c784-f2d0-4422-8ab5-768a2626b21c') {
        // second step show gdpr
        dispatch(updateActiveInfoBox('GDPR'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === '3d2c41ac-8564-469d-a914-6218178a5e83') {
        // name, email, phone, address collected, now asked size of apartment
        dispatch(updateActiveVideo('nodding'))
      } else if (id === '79ef167c-8dcd-4162-8637-af09a54235cc') {
        // set area to heat
        if(Number(lastTwoMessagesArr[0]) >= 250){
          //triggerDialogs();
          history.push('/request-order');
        }

      } else if (
        id === '5950c71d-6cf2-47b2-86e0-15824d7aeace' &&
        lastTwoMessagesArr[0] === 'Dårlig'
      ) {
        // is you hour isolated: bad
        dispatch(updateActiveVideo('freezing'))
        dispatch(setIsIsolated('Dårlig'))
      } else if (
        id === '5950c71d-6cf2-47b2-86e0-15824d7aeace' &&
        lastTwoMessagesArr[0] === 'Godt'
      ) {
        // is you hour isolated: well
        dispatch(updateActiveVideo('thumbsUp'))
        dispatch(setIsIsolated('Godt'))
      } else if (
        id === '0d9aeb18-cbde-43a2-9e6a-01d47dc6f91d' ||
        id === '11c125a9-bde0-4b87-9bf4-4ffb028d74f2'
      ) {
        // see products triggered
        // second id '11c......' come when user decides to
        // change his order after all the steps taken first time
        dispatch(updateActiveInfoBox('products'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (id === 'd3af4dee-79a0-4af2-92fc-bf17e6271d29') {
        // product selected
        dispatch(updateActiveVideo('thumbsUp'))
        dispatch(updateActiveInfoBox(''))
      } else if (id === 'c495b32e-a1a8-4003-9b8d-a58e7b9d0000') {
        // moving on after reading more avout product
        dispatch(updateActiveVideo('nodding'))
      } else if (
        id === 'e43c72be-a268-4797-adec-5df072eab6a7' ||
        id === '41ffd8bc-88ac-48d8-8576-be248fba4a1c'
      ) {
        // suggested products
        // second id '41ff.....' come when user decides to
        // change his order after all the steps taken first time
        dispatch(updateActiveInfoBox('suggested-products'))
        dispatch(updateActiveVideo('pointLeft'))
      } else if (
        id === '2229e63e-d92b-415c-89cf-347bc0d13e84' ||
        id === 'a6b801ea-7ceb-456a-a7bc-e68a0dcd46ce' ||
        id === '6eb732d0-efae-4a82-aeeb-2ffd6d61b62f'
      ) {
        // confirmation of all info collected, so show cart
        // second id 'a6b.........' is after user decides to reslect something
        dispatch(updateActiveInfoBox('cart'))
      } else if (id === '39d52977-54b8-4602-8e51-e9f907944fcb') {
        // user decides to make a change, and list of all changeable option appears
        dispatch(updateActiveInfoBox(''))
        dispatch(updateActiveVideo('greet'))
      }
    },
  }

  // const triggerDialogs = () => {
  //   window.kindlyChat.triggerDialogue('7d2f38d8-b0c4-4b03-8a3a-34a9f304fc66');
  // }


  // init kindly chat
  useEffect(() => {
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
    <>
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
    <AssistantPerson />
    </>

  )
}
