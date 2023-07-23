import type { TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import authReducer from '@/redux/reducers/authReducer'
import productReducer from '@/redux/reducers/productReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer
  }
})

// Declare Typed Definitions
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store