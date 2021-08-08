import { createSlice } from "@reduxjs/toolkit";
import { findNotification } from "../actions/notification.action";

const mySlice = createSlice({
    name: 'notification',
    initialState: {
        isLoading: false,
        actionLoading: false,
        errors: null,
        models: null,
        totalRows: null,
        total: 2
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(findNotification.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(findNotification.fulfilled, (state, action) => {
            state.isLoading = false;
            state.models = action.payload;
        })
    }
})

export const { } = mySlice.actions;
export default mySlice.reducer