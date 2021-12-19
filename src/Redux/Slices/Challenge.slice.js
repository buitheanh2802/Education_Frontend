import LocalStorage from "src/Helpers/Storage";
import { createSlice } from '@reduxjs/toolkit';
import { ActionFindChallenge, ActionGetsChallenge } from '../Actions/Challenge.action';

const mySlice = createSlice({
    name: "Challenge",
    initialState: {
        isLoading: false,
        actionLoading: false,
        challenges: null,
        pagination: null
    },
    reducers: {
        resetChallenge: (state) => {
            state.challenges = null;
            state.pagination = null;
        }
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

        // find cate
        builder.addCase(ActionFindChallenge.pending, (state) => {
            state.isLoading = true;
            state.challenges = null;
        })

        builder.addCase(ActionFindChallenge.rejected, (state) => {
            state.isLoading = false;
            LocalStorage.Remove('_token_');
        })

        builder.addCase(ActionFindChallenge.fulfilled, (state, action) => {
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

export const { resetChallenge } = mySlice.actions;
export default mySlice.reducer;
