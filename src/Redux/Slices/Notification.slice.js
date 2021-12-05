import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
    name: 'notification',
    initialState : {
        models : null,
        process : {
            listLoading : false,
            actionLoading : {

            }
        },
        errors : null
    },
    reducers: {
        startCall(state,action){
            const { callType } = action.payload;
            state.errors = null;
            if(callType === 'list'){
                state.process.listLoading = true;
            }else state.process.actionLoading[callType] = true;
        },
        gets(state,action){
            const { data } = action.payload;
            state.models = data;
            state.process.listLoading = false;
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
export const { startCall,catchError,gets } = actions;
export default reducer;