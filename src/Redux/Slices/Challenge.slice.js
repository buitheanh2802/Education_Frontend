import LocalStorage from "src/Helpers/Storage";
import { createSlice } from '@reduxjs/toolkit';
import { ActionGetsChallenge } from '../Actions/Challenge.action';

const mySlice = createSlice({
    name: "Challenge",
    initialState: {
        isLoading: false,
        actionLoading: false,
        challenges: null,
        pagination: null
    },
    extraReducers: (builder) => {
        builder.addCase(ActionGetsChallenge.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(ActionGetsChallenge.rejected, (state) => {
            state.isLoading = false;
            LocalStorage.Remove('_token_');
        })

        builder.addCase(ActionGetsChallenge.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) {
                state.challenges = data?.models;
                state.pagination = data?.metaData?.pagination
            }
            else {
                console.log(message)
            }
        })
    }
})

export default mySlice.reducer;
