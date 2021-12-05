import LocalStorage from "src/Helpers/Storage";
import { createSlice } from '@reduxjs/toolkit';
import { ActionGetsChallengeCate } from '../Actions/ChallengeCate.action';

const mySlice = createSlice({
    name: "Challenge cate",
    initialState: {
        isLoading: false,
        actionLoading: false,
        challengeCates: null,
        pagination: null
    },
    extraReducers: (builder) => {
        // gets
        builder.addCase(ActionGetsChallengeCate.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(ActionGetsChallengeCate.rejected, (state) => {
            state.isLoading = false;
            LocalStorage.Remove('_token_');
        })

        builder.addCase(ActionGetsChallengeCate.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) {
                state.challengeCates = data?.models;
                state.pagination = data?.metaData?.pagination
            }
            else {
                console.log(message)
            }
        })

        // post
    }
})

export default mySlice.reducer;
