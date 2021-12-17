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
    reducers: {
        appendCommnets: (state, action) => {
            console.log(action?.payload);
        }
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
            const { status, data, message, comment } = action?.payload;
            state.actionLoading = false;
            if (status) {
                if (comment?.parentId) {
                    state.models.map(item => {
                        if (item?._id === comment?.parentId) {
                            if (item.replyComments) return item.replyComments.push(data)
                            item.replyComments = [data]
                        }
                        return item
                    })
                    return
                }

                state.models = [data, ...state.models];
                state.pagination.countDocuments = state?.pagination?.countDocuments + 1;
            }
            else {
                AlartMessage(false, ResponseMessage(message[0]));
            }
        })
    }
})
export const { appendCommnets } = mySlice.actions;
export default mySlice.reducer;