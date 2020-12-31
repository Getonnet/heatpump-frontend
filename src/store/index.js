import { configureStore } from '@reduxjs/toolkit'
import activeInfoBoxReducer from './activeInfoBoxSlice'
import chatLogReducer from './chatLogSlice'
import cartReducer from './cartSlice'

export default configureStore({
  reducer: {
    activeInfoBox: activeInfoBoxReducer,
    chatLog: chatLogReducer,
    cart: cartReducer,
  },
})
