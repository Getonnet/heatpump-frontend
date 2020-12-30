import { createSlice } from '@reduxjs/toolkit'

export const activeInfoBoxSlice = createSlice({
  name: 'activeInfoBox',
  initialState: {
    value: '',
  },
  reducers: {
    updateLog: (state, action) => {
      state.value = action.payload
    },
    clearLog: state => {
      state.value = []
    },
  },
})

export const { updateLog, clearLog } = activeInfoBoxSlice.actions

export const selectCount = state => state.activeInfoBox.value

export default activeInfoBoxSlice.reducer
