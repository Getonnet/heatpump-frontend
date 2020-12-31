import { createSlice } from '@reduxjs/toolkit'

export const chatLogSlice = createSlice({
  name: 'chatLog',
  initialState: {
    value: [],
  },
  reducers: {
    updateLog: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
    clearLog: state => {
      state.value = []
    },
  },
})

export const { updateLog, clearLog } = chatLogSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const updateLogAsync = log => dispatch => {
  // data fetching work
  // then dispatch
  dispatch(updateLog(log))
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.chatLog.value)`
export const selectCount = state => state.chatLog.value

export default chatLogSlice.reducer
