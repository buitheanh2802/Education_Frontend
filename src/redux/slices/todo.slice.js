import { createSlice } from '@reduxjs/toolkit';
import { list } from 'postcss';
import { fetchAllTodo } from './../actions/todo.action';
const mySlice = createSlice({
    name : 'todo',
    initialState : {
        list : [],
        isFetching : false
    },
    //sync action
    reducers : {
        remove : (state,action)=> {
           state.list = state.list.filter(item => item.id != action.payload);
        }
    },
    //dufng cac async action
    extraReducers : (builder) => {
        builder.addCase(fetchAllTodo.pending,(state) => {
            state.isFetching = true;
        })
        builder.addCase(fetchAllTodo.fulfilled,(state,action) => {
            state.isFetching = false;
            state.list = action.payload;
        })
    }
})

const { actions,reducer } = mySlice;


export const { remove } = actions;
export default reducer;