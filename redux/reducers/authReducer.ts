import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    setIsAuthenticating: (state, action) => {
			state.isAuthenticating = action.payload
    }, 
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setIsAuthenticated, setIsAuthenticating, setUser } = authSlice.actions
export default authSlice.reducer