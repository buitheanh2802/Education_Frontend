import { createSlice } from '@reduxjs/toolkit';
import ResponseMessage from 'src/Constants/ResponseMessage';
import { AlartMessage } from 'src/Helpers/';
import { ActionGetsComment, ActionPostComment } from '../Actions/Comments.action';

const mySlice = createSlice({
    name: "Comments",
    initialState: {
        isLoading: false,
        actionLoading: false,
        models: null,
        pagination: null
    },
    extraReducers: (builder) => {
        // gets comments
        builder.addCase(ActionGetsComment.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(ActionGetsComment.rejected, (state) => {
            state.isLoading = false;
            AlartMessage(false, ResponseMessage("ERROR_SERVER"));
        });
        builder.addCase(ActionGetsComment.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) {
                state.models = data?.models;
                state.pagination = data?.metaData?.pagination
            }
            else {
                AlartMessage(false, ResponseMessage(message[0]));
            }
        })

        // post comment
        builder.addCase(ActionPostComment.pending, (state) => {
            state.actionLoading = true;
        });
        builder.addCase(ActionPostComment.rejected, (state) => {
            state.actionLoading = false;
            AlartMessage(false, ResponseMessage("ERROR_SERVER"));
        });
        builder.addCase(ActionPostComment.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.actionLoading = false;
            if (status) {
                state.models = [data, ...state.models];
                state.pagination.countDocuments = state?.pagination?.countDocuments + 1;
            }
            else {
                AlartMessage(false, ResponseMessage(message[0]));
            }
        })
    }
})

export default mySlice.reducer;