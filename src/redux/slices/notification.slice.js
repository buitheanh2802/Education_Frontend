import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name: 'notification',
    initialState: {
        isLoading: false,
        models: null,
        totalRows: null
    },
    reducers: {}
})

export const { } = mySlice.actions;
export default mySlice.reducer