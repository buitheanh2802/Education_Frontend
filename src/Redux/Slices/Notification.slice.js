import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
    name: 'notification',
    initialState: {
        models: null,
        pagination: {},
        counter : 0,
        process: {
            listLoading: false,
            actionLoading: {
                readMore: false,
                readAll : false
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
            state.counter = data.metaData.pagination.unRead;
            state.pagination = data.metaData.pagination;
            state.models = data.models;
            state.process.listLoading = false;
        },
        hasNotification(state){
            state.counter += 1;
        },
        readMore(state, action) {
            const { data } = action.payload;
            state.models = [...state.models, ...data.models];
            state.pagination = data.metaData.pagination;
            state.process.actionLoading.readMore = false;
        },
        readAll(state,action){
            state.counter = 0;
            state.models = state.models.map(item => {
                item.isRead = true;
                return item;
            })
            state.process.actionLoading.readAll = false;
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
export const { startCall, catchError, gets, readMore,hasNotification,readAll } = actions;
export default reducer;