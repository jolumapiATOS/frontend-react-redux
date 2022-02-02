import { createSlice } from '@reduxjs/toolkit'

const signUpSlice = createSlice({
  name: 'counter',
  initialState: {
    signUp: false
  },
  reducers: {
    positive: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.signUp = true
    },
    negative: state => {
      state.signUp = false
    }
  }
})

export const { positive, negative } = signUpSlice.actions

export default signUpSlice;