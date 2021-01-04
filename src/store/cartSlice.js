import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartState',
  initialState: {
    selectedProducts: [],
    cartTotal: 0,
    cartCount: 0,
  },
  reducers: {
    updateSelectedProducts: (state, action) => {
      state.selectedProducts.push(action.payload)
    },
    updateCartTotal: (state, action) => {
      state.cartTotal = action.payload
    },
    updateCartCount: (state, action) => {
      state.cartCount = action.payload
    },
    clearCart: state => {
      state.selectedProducts = []
      state.cartTotal = 0
      state.cartCount = 0
    },
  },
})

export const {
  updateSelectedProducts,
  updateCartTotal,
  updateCartCount,
  clearCart,
} = cartSlice.actions

export const updateCartAsync = chatId => dispatch => {
  dispatch(updateSelectedProducts([]))
}

export const selectProducts = state => state.cart.selectedProducts
export const selectCartTotal = state => state.cart.cartTotal
export const selectCartCount = state => state.cart.cartCount

export default cartSlice.reducer
