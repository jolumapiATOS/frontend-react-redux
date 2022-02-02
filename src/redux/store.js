import { configureStore } from '@reduxjs/toolkit';
import userReducer  from '../features/signUpSlice.js'


export default configureStore({
    reducer: {
        userState: userReducer
    }
})