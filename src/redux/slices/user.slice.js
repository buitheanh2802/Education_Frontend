import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name: 'userLogin',
    initialState: {
        isUser: false,
        profile: null,
        notification: null
    },
    reducers: {
        findAll: (state, action) => {
            return { ...state, isUser: true, profile: action.payload }
        },
        findNotifi: (state, action) => {
            return { ...state, notification: action.payload }
        }
    }
})

export const { findAll, findNotifi } = mySlice.actions;
export default mySlice.reducer