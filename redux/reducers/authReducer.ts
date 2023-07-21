import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true
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
    }
  }
})

export const { setIsAuthenticated, setIsAuthenticating } = authSlice.actions
export default authSlice.reducer