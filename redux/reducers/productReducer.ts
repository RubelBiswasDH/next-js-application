import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [] as any
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    updateProducts: (state, action) => {
			state.products = [ ...state.products, ...action.payload ]
    }
  }
})

export const { setProducts, updateProducts } = productSlice.actions
export default productSlice.reducer