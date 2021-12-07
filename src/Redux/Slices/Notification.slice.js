import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
    name: 'notification',
    initialState: {
        models: null,
        pagination: {},
        process: {
            listLoading: false,
            actionLoading: {
                readMore: false
            }
        },
        errors: null
    },
    reducers: {
        startCall(state, action) {
            const { callType } = action.payload;
            state.errors = null;
            if (callType === 'list') {
                state.process.listLoading = true;
            } else state.process.actionLoading[callType] = true;
        },
        gets(state, action) {
            const { data } = action.payload;
            state.pagination = data.metaData.pagination;
            state.models = data.models;
            state.process.listLoading = false;
        },
        readMore(state, action) {
            const { data } = action.payload;
            state.models = [...state.models, ...data.models];
            state.pagination = data.metaData.pagination;
            state.process.actionLoading.readMore = false;
        },
        catchError(state, action) {
            const { callType, errors } = action.payload;
            if (callType === 'list') {
                state.process.listLoading = false;
            } else {
                state.process.actionLoading[callType] = false;
            }
            state.errors = errors;
        },
    }
})

const { reducer, actions } = mySlice;
export const { startCall, catchError, gets, readMore } = actions;
export default reducer;