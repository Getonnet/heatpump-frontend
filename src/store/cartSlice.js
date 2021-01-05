import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    selectedProducts: {},
    cartTotal: 0,
    cartCount: 0,
  },
  reducers: {
    updateSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload
    },
    addSelectedProducts: (state, action) => {
      state.selectedProducts[action.payload.id] = action.payload.product
    },
    removeSelectedProducts: (state, action) => {
      delete state.selectedProducts[action.payload.id]
    },
    updateProductQuantity: (state, action) => {
      state.selectedProducts[action.payload.id].qty = action.payload.qty
    },
    updateCartTotal: (state, action) => {
      state.cartTotal = action.payload
    },
    updateCartCount: (state, action) => {
      state.cartCount = action.payload
    },
    incrementCartCount: (state, action) => {
      state.cartCount += action.payload
    },
    decrementCartCount: (state, action) => {
      state.cartCount -= action.payload
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
  addSelectedProducts,
  removeSelectedProducts,
  updateProductQuantity,
  updateCartTotal,
  updateCartCount,
  incrementCartCount,
  decrementCartCount,
  clearCart,
} = cartSlice.actions

export const updateCart = productsArr => dispatch => {
  // update all products
  dispatch(updateSelectedProducts(productsArr))

  // update cart count
  let quantityCount = productsArr.reduce((a, b) => a + b['quantity'], 0)
  dispatch(updateCartCount(quantityCount))

  // update cart total
  let amount = productsArr.map(product => product.qty * product.prices)
  let total = amount.reduce((a, b) => a + b, 0)
  dispatch(updateCartTotal(total))
}

export const selectProducts = state => state.cart.selectedProducts
export const selectCartTotal = state => state.cart.cartTotal
export const selectCartCount = state => state.cart.cartCount

export default cartSlice.reducer
