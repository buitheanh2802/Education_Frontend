import { createSlice } from '@reduxjs/toolkit';
import { login } from './../actions/account.action';


const mySlice = createSlice({
    name : 'login',
    initialState : {

    },
    reducers : {
        logout : (state,action) => {
            
        }
    },
    extraReducers : (builder) => {
        builder.addCase(login.pending,(state,action) => {
            //khi dữ liệu đang đi lấy sẽ làm gì đó ví dụ show loading
        })
        builder.addCase(login.fulfilled,(state,action) => {
            //khi dữ liệu trả về : setState 
        })
    }
})

const { actions,reducer } = mySlice;

export const { logout } = actions;
export default reducer;