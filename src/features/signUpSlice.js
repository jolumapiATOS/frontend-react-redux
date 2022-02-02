import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        add: (state, action) => {
            state.value = action.payload
        },
        minus: ()=> {

        }
    }
});

export const { add } = userSlice.actions;

export default userSlice.reducer; 