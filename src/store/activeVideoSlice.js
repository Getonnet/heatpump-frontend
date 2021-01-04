import { createSlice } from '@reduxjs/toolkit'

export const activeVideoSlice = createSlice({
  name: 'activeVideo',
  initialState: {
    value: 'greet',
  },
  reducers: {
    updateActiveVideo: (state, action) => {
      state.value = action.payload
    },
    clearActiveVideo: state => {
      state.value = 'idle'
    },
  },
})

export const { updateActiveVideo, clearActiveVideo } = activeVideoSlice.actions

export const selectActiveVideo = state => state.activeVideo.value

export default activeVideoSlice.reducer
