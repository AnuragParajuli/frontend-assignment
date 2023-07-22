// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/productSlice'

const store = configureStore({
  reducer: {
    products: productReducer,
    // Add other reducers here if needed
  },
})

export default store
