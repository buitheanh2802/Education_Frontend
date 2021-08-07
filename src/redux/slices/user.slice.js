import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        isUser: false,
        profile: null
    },
    reducers: {}
})

export const { } = mySlice.actions;
export default mySlice.reducer