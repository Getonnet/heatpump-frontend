import { configureStore } from '@reduxjs/toolkit'
import activeInfoBoxReducer from './activeInfoBoxSlice'

export default configureStore({
  reducer: {
    activeInfoBox: activeInfoBoxReducer,
  },
})
