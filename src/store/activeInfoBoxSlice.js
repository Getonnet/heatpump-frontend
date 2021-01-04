import { createSlice } from '@reduxjs/toolkit'

export const activeInfoBoxSlice = createSlice({
  name: 'activeInfoBox',
  initialState: {
    value: '',
  },
  reducers: {
    updateActiveInfoBox: (state, action) => {
      state.value = action.payload
    },
    clearActiveInfoBox: state => {
      state.value = ''
    },
  },
})

export const {
  updateActiveInfoBox,
  clearActiveInfoBox,
} = activeInfoBoxSlice.actions

export const selectActiveInfoBox = state => state.activeInfoBox.value

export default activeInfoBoxSlice.reducer
