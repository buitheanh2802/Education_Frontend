import { createSlice } from "@reduxjs/toolkit";
import { actionLogin } from "../actions/user.action";

const mySlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        actionLoading: false,
        errors: null,
        isUser: false,
        profile: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actionLogin.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(actionLogin.fulfilled, (state, action) => {
            state.isUser = true;
            state.isLoading = false;
            state.profile = action.payload;
        })
    }
})

export const { } = mySlice.actions;
export default mySlice.reducer